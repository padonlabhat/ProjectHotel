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
import { RegisterComponent } from './register/register.component';
import { HotelComponent } from './hotel/hotel.component';
import { AppComponent } from './app.component';
import { HeaderhotelComponent } from './headerhotel/headerhotel.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: '', redirectTo:'home', component: AppComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'cancelbooking', component: CancelbookingComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'search', component: SearchComponent},
  { path: 'receipt', component: ReceiptComponent},
  { path: 'bookinghistory', component: BookinghistoryComponent},
  { path: 'home', component: HomeComponent},
  { path: 'hotel', component: HotelComponent},
  { path: 'headerhotel', component: HeaderhotelComponent},
  { path: 'heade', component: HeaderComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'footer', component: FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
