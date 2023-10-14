import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgotPasswordConfirmationComponent } from './forgot-password-confirmation/forgot-password-confirmation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'instagram',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/account/login',
    pathMatch: 'full'
  },
  {
    path: 'account/login',
    component: LoginComponent
  },
  {
    path: 'account/signup',
    component: SignupComponent
  },
  {
    path: 'account/profile',
    component: ProfileComponent
  },
  { path: 'account/forgot-password', 
    component: ForgetPasswordComponent
  },
  { path: 'account/forgot-password-confirmation', 
  component: ForgotPasswordConfirmationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
