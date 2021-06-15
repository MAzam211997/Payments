import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { FormsModule } from '@angular/forms';
import { PaymentDetailService } from './shared/payment-detail.service';
import { FormsServiceService } from './shared/Services/Forms/forms-service.service';
import { FormsComponent } from './Forms/forms/forms.component';
import { AddFormComponent } from './Forms/forms/add-form/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    FormsComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 3000,
      //positionClass: 'toast-bottom-right',
      preventDuplicates: true,})
  ],
  providers: [PaymentDetailService,FormsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
