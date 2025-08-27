import { Component, OnInit } from '@angular/core';
import { ConsigneeService } from '../../services/consignee.service';
import { ConsigneeApiResponse,  consigneeListClass } from '../../models/consignee-list.model';

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

  consigneeList:consigneeListClass=new consigneeListClass(); // to call api 

getList(){
  this.consigneeListService.getConsignees(this.consigneeList).subscribe({
    next:(response)=>{
      //console.log('Consignee List fetched successfully:',response);
      this.consogneeListApiData=response.consignee;
    //  console.log(this.consogneeListApiData);
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


  openDeleteModal(id:string){
    console.log("Delete ID:",id);
    this.selectedConsigneeId=id;
    this.isDeleteOpen=true;
  }

  closeDeleteModal() {
    this.isDeleteOpen = false; // hide the modal
    this.selectedConsigneeId = null;
  }

  viewConsignee(id:string){
     this.consigneeListService.viewConsigneeById(id).subscribe({
      next: (response:any) => {
    //    console.log('Consignee data fetched successfully:', response.city);
        this.selectedConsigneeForm=response.city;
     //   console.log(this.selectedConsigneeForm);
        this.openForm();
       
      },
      error: (error) => {
        console.error('Error fetching consignee data:', error);
        alert('Error fetching consignee data: ' + (error?.message || 'Unknown error'));
      }
 })
  }

 
}
