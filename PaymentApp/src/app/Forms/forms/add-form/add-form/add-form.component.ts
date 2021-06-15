import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Forms } from 'src/app/shared/Services/Forms/forms.model';
import { FormsServiceService } from '../../../../shared/Services/Forms/forms-service.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(public service:FormsServiceService, private toaster:ToastrService) { }

  ngOnInit(): void {
    this.toaster.toastrConfig.closeButton = true;
  }
  onSubmit(form:NgForm)
  {
    if(this.service.formData.formId == 0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }
  insertRecord(form:NgForm)
  {
    this.service.postForms().subscribe(
      result=>{
            this.resetForm(form);
            this.service.getForms();
            this.toaster.success("Form has been saved successfully.","Forms")
      },error=>{
        console.log(error);
      }
    );
  }
  updateRecord(form:NgForm)
  {
    this.service.putForms().subscribe(
      result=>{
            this.resetForm(form);
            this.service.getForms();
            this.toaster.info("Form has been updated successfully.","Form")
      },error=>{
        console.log(error);
      }
    );
  }
  resetForm(form:NgForm)
  {
    form.form.reset;
    this.service.formData=new Forms();
  }
}
