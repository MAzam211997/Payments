import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from '@angular/common/http';
//import 'rxjs/add/operator/map'
//import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }
  readonly baseURL='https://localhost:44360/api/PaymentDetail';
  formData:PaymentDetail=new PaymentDetail();
  paymentDetailList:PaymentDetail[];
  postPaymentDetail()
  {
    return this.http.post(this.baseURL,this.formData);
  }
  putPaymentDetail()
  {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`,this.formData);
  }
  deletePaymentDetail(Id:number)
  {
    return this.http.delete(`${this.baseURL}/${Id}`);
  }
  refreshList(){
    this.http.get(this.baseURL).toPromise().then(result=>this.paymentDetailList=result as PaymentDetail[]);
  }
  //  GetAll()
  // {
  //   this.http.get(this.baseURL).toPromise().then(result=>this.paymentDetailList=result as PaymentDetail[]);
  // }
}
