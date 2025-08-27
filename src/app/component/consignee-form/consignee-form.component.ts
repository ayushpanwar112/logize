import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ConsigneeService } from '../../services/consignee.service';
import { ConsigneeFormClass } from '../../models/consignee-form.model';

@Component({
  selector: 'app-consignee-form',
  templateUrl: './consignee-form.component.html',
  styleUrls: ['./consignee-form.component.scss']
})
export class ConsigneeFormComponent implements OnInit {

  constructor(private consigneeService: ConsigneeService) { }

  ngOnInit(): void {
      console.log(this.selectedConsignee);
      this.modalMapping();
  }

  @Input() openbtn!: boolean;
  @Output() openbtnChange = new EventEmitter<boolean>();
  @Input() selectedConsignee:any; // to receive data from parent component

  consigneeFormData: ConsigneeFormClass = new ConsigneeFormClass();

  isVerified: boolean | null = null;
  

modalMapping(){
  if(this.selectedConsignee){
   // inside your component after API response

this.consigneeFormData.cneId = this.selectedConsignee.CneId;
this.consigneeFormData.cneGstIn = this.selectedConsignee.CneGstIn;
this.consigneeFormData.cneName = this.selectedConsignee.CneName;
this.consigneeFormData.cneCode = this.selectedConsignee.CneCode;
this.consigneeFormData.cnePrintAs = this.selectedConsignee.CnePrintAs;
this.consigneeFormData.cneAddress = this.selectedConsignee.CneAddress;
this.consigneeFormData.cneCtyId = this.selectedConsignee.CneCtyId;
this.consigneeFormData.cnePinCode = this.selectedConsignee.CnePinCode;
this.consigneeFormData.cneStaId = this.selectedConsignee.CneStaId;
this.consigneeFormData.cneCntId = this.selectedConsignee.CneCntId;
this.consigneeFormData.cneContactPerson = this.selectedConsignee.CneContactPerson;
this.consigneeFormData.cnePhoneNo = this.selectedConsignee.CnePhoneNo;
this.consigneeFormData.cneMobileNo = this.selectedConsignee.CneMobileNo;
this.consigneeFormData.cneEmail = this.selectedConsignee.CneEmail;
this.consigneeFormData.cnePan = this.selectedConsignee.CnePan;
this.consigneeFormData.cneWhatsApp = this.selectedConsignee.CneWhatsApp;
this.consigneeFormData.cneCreateAcm = this.selectedConsignee.CneCreateAcm;
this.consigneeFormData.cneRemarks = this.selectedConsignee.CneRemarks;
this.consigneeFormData.cneStsCode = this.selectedConsignee.CneStsCode;
this.consigneeFormData.cneAddUser = this.selectedConsignee.CneAddUser;
this.consigneeFormData.cneAddDate = this.selectedConsignee.CneAddDate;
this.consigneeFormData.cneModUser = this.selectedConsignee.CneModUser;
this.consigneeFormData.cneModDate = this.selectedConsignee.CneModDate;
this.consigneeFormData.cneVMobile = this.selectedConsignee.CneVMobile;
this.consigneeFormData.cneVPan = this.selectedConsignee.CneVPan;
this.consigneeFormData.cneVGstin = this.selectedConsignee.CneVGstin;
this.consigneeFormData.cneVWno = this.selectedConsignee.CneVWno;
this.consigneeFormData.cneVEmail = this.selectedConsignee.CneVEmail;
this.consigneeFormData.cneVPin = this.selectedConsignee.CneVPin;
this.consigneeFormData.cneCtyName = this.selectedConsignee.CneCtyName;
this.consigneeFormData.cneStaName = this.selectedConsignee.CneStaName;
this.consigneeFormData.cneCntName = this.selectedConsignee.CneCntName;
this.consigneeFormData.cneNameId = this.selectedConsignee.CneNameId;
this.consigneeFormData.reason = this.selectedConsignee.Reason;

  }
}

  closeBtn() {
    this.openbtn = false;
    this.openbtnChange.emit(this.openbtn);
  }



  onSubmit(form: any) {
    if (form.valid) {
      this.consigneeService.createConsignee(this.consigneeFormData).subscribe({
        next: (response) => {
          console.log('Consignee created successfully:', response);
          this.openbtn = false;
          this.openbtnChange.emit(this.openbtn);
          form.resetForm(); // Reset after save
        },
        error: (error) => {
          console.error('Error creating consignee:', error);
          alert('Error creating consignee: ' + (error?.message || 'Unknown error'));
        }
      });
    } else {
      Object.values(form.controls).forEach((c: any) => c.markAsTouched());
    }
  }


  focusNext(event: any) {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    const form = target.form as HTMLFormElement;
    const index = Array.prototype.indexOf.call(form, target);
    if (form.elements[index + 1]) {
      (form.elements[index + 1] as HTMLElement).focus();
    }
  }


  verifyMobile() {
    if (this.consigneeFormData.cneMobileNo && /^[6-9][0-9]{9}$/.test(this.consigneeFormData.cneMobileNo)) {
      this.isVerified = true;
    } else {
      this.isVerified = false;
    }
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeBtn();
    }
    if (event.key === 'F10') {
      event.preventDefault();
      const formElement = document.querySelector('form') as HTMLFormElement;
      if (formElement) formElement.requestSubmit();
    }
  }


allowOnlyNumbers(event: KeyboardEvent): boolean {
  const key = event.key;

  // Allow only digits 0-9
  if (/^[0-9]$/.test(key)) {
    return true;
  }

 

  event.preventDefault(); 
  return false;
}



}
