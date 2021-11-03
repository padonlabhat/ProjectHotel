import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
<<<<<<< Updated upstream
import { HomeComponent } from './home/home.component';

=======
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'cancelbooking', component: CancelbookingComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'search', component: SearchComponent},
  { path: 'receipt', component: ReceiptComponent},
  { path: 'bookinghistory', component: BookinghistoryComponent},
<<<<<<< Updated upstream
  { path: 'home', component: HomeComponent},
=======
  { path: 'roomdetail', component: RoomdetailComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
