import { Component, HostListener, OnInit } from '@angular/core';
import { ConsigneeService } from '../../services/consignee.service';
import { ConsigneeApiResponse,    consigneeListClass } from '../../models/consignee-list.model';

@Component({
  selector: 'app-consignee',
  templateUrl: './consignee.component.html',
  styleUrls: ['./consignee.component.scss']
})
export class ConsigneeComponent implements OnInit {

  constructor(private consigneeListService:ConsigneeService) { }

  ngOnInit(): void {
    this.getList();
  }

  selectedConsigneeId:string|null=null;
  isDeleteOpen:boolean=false;
consogneeListApiData:ConsigneeApiResponse[]=[];//to show data in table
selectedConsigneeForm:any=null; // to pass data to form component
selectedStscode:number|null=null;
searchText: string = '';




  consigneeList:consigneeListClass=new consigneeListClass(); // to call api 

  mode:string='LIST'; 

getList(){
  this.consigneeListService.getConsignees(this.consigneeList).subscribe({
    next:(response)=>{
      
      this.consogneeListApiData=response.consignee;
   
    },
    error:(error)=>{
      console.error('Error fetching consignee list:',error);
      alert('Error fetching consignee list: '+(error?.message || 'Unknown error'));
    }
  });
}

    isFormOpen:boolean= false;
  isFilterShow:boolean=false;



  getEmptyRows() {
    const toFill = 20 - this.consogneeListApiData.length;
    return Array(toFill > 0 ? toFill : 0);
  }
  openForm(){
  this.isFormOpen=true;
  }
  openFilter(){
    this.isFilterShow=!this.isFilterShow
  }
resetSearch() {
  this.getList();
}

  openDeleteModal(id:string){
    this.mode='DELETE';
    
    this.selectedConsigneeId=id;
    this.isDeleteOpen=true;
  }

  closeDeleteModal() {
    this.isDeleteOpen = false; // hide the modal
    this.selectedConsigneeId = null;
  }

  viewConsignee(id:string){
    this.mode='VIEW';
     this.consigneeListService.viewConsigneeById(id).subscribe({
      next: (response:any) => {
   
        this.selectedConsigneeForm=response.city;
     
        this.openForm();
       
      },
      error: (error) => {
        console.error('Error fetching consignee data:', error);
        alert('Error fetching consignee data: ' + (error?.message || 'Unknown error'));
      }
 })
  }

  cancelConsigneeRow(id:string,stscode:number){
 this.mode='CANCEL';
this.selectedConsigneeId=id;
this.selectedStscode=stscode;
this.isDeleteOpen=true;
}


 @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'F1') {
      event.preventDefault(); // stops browser help from opening
      this.openForm();
    }
  }
 
}
