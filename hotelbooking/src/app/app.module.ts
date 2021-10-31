import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimplePageComponent } from './simple-page/simple-page.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    SimplePageComponent,
    SearchComponent,
    LoginComponent,
    CancelbookingComponent,
    BookingComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
