import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from '../../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    if(this.service.formData.paymentDetailId == 0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }
  insertRecord(form:NgForm)
  {
    this.service.postPaymentDetail().subscribe(
      result=>{
            this.resetForm(form);
            this.service.refreshList();
            this.toaster.success("Payment details saved successfully.","Payment Details")
      },error=>{
        console.log(error);
      }
    );
  }
  updateRecord(form:NgForm)
  {
    this.service.putPaymentDetail().subscribe(
      result=>{
            this.resetForm(form);
            this.service.refreshList();
            this.toaster.info("Payment details updated successfully.","Payment Details")
      },error=>{
        console.log(error);
      }
    );
  }
  resetForm(form:NgForm)
  {
    form.form.reset;
    this.service.formData=new PaymentDetail();
  }
}
