import { Injectable } from '@angular/core';
import {  ConsigneeFormInterface } from '../models/consignee-form.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { consigneeListApiInterface } from '../models/consignee-list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsigneeService {

 

  private baseUrl:string= environment.apiUrl;
  private Code:string= environment.Code;
  constructor(private http:HttpClient) { }


   createConsignee(consigneeData: ConsigneeFormInterface) {
  
 const headers = new HttpHeaders({
      'Code': this.Code
    });

    return this.http.post(`${this.baseUrl}/Consignee`,consigneeData,{headers});
  }

  getConsignees(params: any):Observable<consigneeListApiInterface> {
    const headers = new HttpHeaders({
      'Code': this.Code
    });

    return this.http.get<consigneeListApiInterface>(`${this.baseUrl}/Consignee/GetConsigneeList`, { headers, params });
  }

  deleteConsigneeData(params: any) {
    const headers = new HttpHeaders({
      'Code': this.Code
    });

    return this.http.delete(`${this.baseUrl}/Consignee/DeleteConsignee`, { headers,params });
  }



 dropdownDeleteConsignee() {
 const params = new HttpParams().set('Type', 'DELETE REASON');
  const headers = new HttpHeaders({
    'Code': this.Code
  });

  return this.http.get(`${this.baseUrl}/Common/BindDropDown`, { headers, params });
}

viewConsigneeById(id: string) {
  const headers = new HttpHeaders({
    'Code': this.Code
  });

  return this.http.get(`${this.baseUrl}/Consignee/${id}`, { headers });
}

cancleConsignee(params: any) {
  const headers= new HttpHeaders({
    'Code': this.Code
  });
  return this.http.get(`${this.baseUrl}/Consignee/CancelConsigneeCode`,{headers,params});
}


}
