import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRow:PaymentDetail)
  {
    this.service.formData= Object.assign({},selectedRow) ;
  }
  onDelete(id:number){
    if(confirm("Are you sure you want to delete the record ?"))
    {
      this.service.deletePaymentDetail(id).subscribe(
        result => {
          this.service.refreshList();
          this.toaster.error("Payment details deleted successfully.","Payment Details")
        },
        error => {console.log(error);}
      );
    }
  }
}
