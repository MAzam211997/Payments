import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { Forms } from './forms.model';

@Injectable({
  providedIn: 'root'
})
export class FormsServiceService {

  constructor(private http:HttpClient) { }
  readonly baseURL='https://localhost:44360/api/Forms';
  formData:Forms=new Forms();
  formsList:Forms[];
  postForms()
  {
    return this.http.post(this.baseURL,this.formData);
  }
  putForms()
  {
    return this.http.put(`${this.baseURL}/${this.formData.formId}`,this.formData);
  }
  deleteForms(Id:number)
  {
    return this.http.delete(`${this.baseURL}/${Id}`);
  }
  getForms(){
    this.http.get(this.baseURL).toPromise().then(result=>this.formsList=result as Forms[]);
  }
}
