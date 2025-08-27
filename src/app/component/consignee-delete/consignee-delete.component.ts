import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Branch, consigneeDeleteClass, Master } from '../../models/consignee-list.model';
import { ConsigneeService } from '../../services/consignee.service';

@Component({
  selector: 'app-consignee-delete',
  templateUrl: './consignee-delete.component.html',
  styleUrls: ['./consignee-delete.component.scss']
})
export class ConsigneeDeleteComponent implements OnInit {

  @Input() consigneeId!: number;
  @Output() closeModal = new EventEmitter<void>();


  constructor(private consgineeService:ConsigneeService) { }

  branchList: Branch[] = [];
masterList: Master[] = [];


  deleteConsignee: consigneeDeleteClass = new consigneeDeleteClass();
 

  ngOnInit(): void {
   
    this.deleteRecord();
    this.deleteConsignee.Id=this.consigneeId;
    console.log('Consignee ID to delete:', this.consigneeId);
    
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

  deleteConfirm(){
    this.consgineeService.deleteConsigneeData(this.deleteConsignee).subscribe({
      next:(response)=>{
        console.log('Consignee deleted successfully:',response);
        this.cancel();
      },
      error:(error)=>{
        console.error('Error deleting consignee:',error);
        alert('Error deleting consignee: '+(error?.message || 'Unknown error'));
      }
    })
  }


}
