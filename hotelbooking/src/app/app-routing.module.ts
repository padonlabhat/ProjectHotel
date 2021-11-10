import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { HomeComponent } from './home/home.component';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'cancelbooking', component: CancelbookingComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'search', component: SearchComponent},
  { path: 'receipt', component: ReceiptComponent},
  { path: 'bookinghistory', component: BookinghistoryComponent},
  { path: 'home', component: HomeComponent},
  { path: 'roomdetail', component: RoomdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
