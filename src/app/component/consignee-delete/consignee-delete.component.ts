import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Branch, consigneeCancelClass, consigneeCancelInterface, consigneeDeleteClass, Master } from '../../models/consignee-list.model';
import { ConsigneeService } from '../../services/consignee.service';

@Component({
  selector: 'app-consignee-delete',
  templateUrl: './consignee-delete.component.html',
  styleUrls: ['./consignee-delete.component.scss']
})
export class ConsigneeDeleteComponent implements OnInit {

  @Input() consigneeId!: number;
  @Output() closeModal = new EventEmitter<void>();
  @Input() typeofMode!:string; // to differentiate between delete and cancel
  @Input() consigneeStscode!:number|null;
    @Input() refreshFn!: () => void;


  constructor(private consgineeService:ConsigneeService) { }

  branchList: Branch[] = [];
masterList: Master[] = [];

reason:string='APPROVED DELETE';


  deleteConsignee: consigneeDeleteClass = new consigneeDeleteClass();
  cancelConsignee: consigneeCancelClass=new consigneeCancelClass();
 

  ngOnInit(): void {
   // console.log(this.typeofMode)
   console.log(this.consigneeId,"id by id")
   
    this.deleteRecord();
   this.SelectMode();
    
    
  }
 
SelectMode() {
  switch (this.typeofMode) {
    case 'CANCEL':
      console.log(this.consigneeId,"case");
      this.cancelConsignee.Id = this.consigneeId;
      this.cancelConsignee.Reason = this.reason;
      this.cancelConsignee.User='SYSTEM';
      this.cancelConsignee.StatusCode = 2;/* this.consigneeStscode */
      break;

    case 'DELETE':
      this.deleteConsignee.Id = this.consigneeId;
      this.deleteConsignee.Reason = this.reason;
      break;

    default:
      console.warn('Unknown mode:', this.typeofMode);
      break;
  }
}



  cancel() {
    this.closeModal.emit();
  }

  deleteRecord() {   // this is dropdown for delete reason
   
    this.consgineeService.dropdownDeleteConsignee().subscribe({
      next:(response:any)=>{
        this.masterList=response.MasterList;
       
        
      },
      error:(error)=>{
        console.error('Error deleting consignee:',error);
        alert('Error deleting consignee: '+(error?.message || 'Unknown error'));
      }
    })
  }

deleteConfirm() {
  switch (this.typeofMode) {
    case 'CANCEL':
      this.consgineeService.cancleConsignee(this.cancelConsignee).subscribe({
        next: (res) => {
          console.log('Consignee cancelled successfully:', res);
          this.cancel();
          this.refreshFn(); 
        },
        error: (e) => {
          console.error('Error cancelling consignee:', e);
          alert('Error cancelling consignee: ' + (e?.message || 'Unknown error'));
        }
      });
      break;

    case 'DELETE':
      this.consgineeService.deleteConsigneeData(this.deleteConsignee).subscribe({
        next: (response) => {
          console.log('Consignee deleted successfully:', response);
          this.cancel();
          this.refreshFn(); 
        },
        error: (error) => {
          console.error('Error deleting consignee:', error);
          alert('Error deleting consignee: ' + (error?.message || 'Unknown error'));
        }
      });
      break;

    default:
      console.warn('Unknown mode:', this.typeofMode);
      break;
  }
}


}
