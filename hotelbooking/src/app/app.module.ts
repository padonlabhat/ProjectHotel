import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { BookingComponent } from './booking/booking.component';
import { SearchComponent } from './search/search.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { HotelComponent } from './hotel/hotel.component';//g4
import { HomeComponent } from './home/home.component';

import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { CalendarModule } from 'primeng/calendar';//g1 caledar and time
import { DropdownModule } from 'primeng/dropdown';//g2 dropdown
import { ButtonModule } from 'primeng/button';//payment
import { FileUploadModule } from 'primeng/fileupload';//g4 uploand
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListModule } from 'primeng/orderlist';
import { RegisterComponent } from './register/register.component';
import { InputTextModule } from 'primeng/inputtext';//payment


import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CrudService } from './service/crud.service';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    LoginComponent,
    CancelbookingComponent,
    BookingComponent,
    SearchComponent,
    PaymentComponent,
    HotelComponent,
    ReceiptComponent,
    BookinghistoryComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    OrderListModule,
    InputTextModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    Ng2SearchPipeModule,
    AngularFirestoreModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }

