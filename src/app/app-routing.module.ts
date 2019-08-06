import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReversationsComponent } from './reservations/reservations.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component'


const routes: Routes = [
  { path:"",component:HomeComponent},
  { path:"",component: AboutComponent},
  { path:"",component: ReversationsComponent},
  { path:"",component: SignInComponent},
  { path:"",component: SignUpComponent},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
