import { Forms } from './../../shared/Services/Forms/forms.model';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from '../../shared/Services/Forms/forms-service.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(public service:FormsServiceService,public toaster:ToastrService) { }

  ngOnInit(): void {
    this.service.getForms();
  }
   populateForm(selectedRow:Forms)
  {
    this.service.formData= Object.assign({},selectedRow) ;
  }
  onDelete(id:number){
    if(confirm("Are you sure you want to delete the form ?"))
    {
      this.service.deleteForms(id).subscribe(
        result => {
          this.service.getForms();
          this.toaster.toastrConfig.closeButton = true;

          this.toaster.error("Form has been deleted successfully.","Forms")
        },
        error => {console.log(error);}
      );
    }
  }
}
