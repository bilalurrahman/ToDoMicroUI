import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginuserComponent } from './authentication/loginuser/loginuser.component';

const routes: Routes = [
  {
    path:'',
    component:LoginuserComponent
  },
  {
    path:'register',
    component:RegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
