import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ExportbillComponent } from './exportbill/exportbill.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { GeneratebookingComponent } from './generatebooking/generatebooking.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RoomdetailComponent,
    ReceiptComponent,
    ExportbillComponent,
    BookingComponent,
    LoginComponent,
    PaymentComponent,
    CancelbookingComponent,
    GeneratebookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
