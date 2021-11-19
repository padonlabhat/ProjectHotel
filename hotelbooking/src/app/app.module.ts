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

import { FileUploadModule } from 'primeng/fileupload';//hotel
import { HttpClientModule } from '@angular/common/http';//hotel

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListModule } from 'primeng/orderlist';
import { RegisterComponent } from './register/register.component';
import { InputTextModule } from 'primeng/inputtext';//payment
import {ToastModule} from 'primeng/toast';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { CrudService } from './service/crud.service';

import { InputMaskModule } from 'primeng/inputmask'; //add phone namder
import {KeyFilterModule} from 'primeng/keyfilter'; //add gmail
import { ConfirmDialogModule } from 'primeng/confirmdialog'; //Use in login and register
import {InputNumberModule} from 'primeng/inputnumber';
import { HeaderComponent } from './header/header.component';
import { HeaderhotelComponent } from './headerhotel/headerhotel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';//hotel

import {GMapModule} from 'primeng/gmap'; //hotel
import {ChartModule} from 'primeng/chart';
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
    RegisterComponent,
    HeaderComponent,
    HeaderhotelComponent,
    DashboardComponent,
    FooterComponent,
    
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
    InputMaskModule,
    KeyFilterModule,
    ToastModule,
    ConfirmDialogModule,
    InputNumberModule,
    GMapModule,
    ChartModule
   

  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }

