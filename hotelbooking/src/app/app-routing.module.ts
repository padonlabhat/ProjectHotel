import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { LoginComponent } from './login/login.component';

import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'cancelbooking', component: CancelbookingComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  PaymentComponent,
  LoginComponent,
  CancelbookingComponent,
  BookingComponent,
  SearchComponent
]
