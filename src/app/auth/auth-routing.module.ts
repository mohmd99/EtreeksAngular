import { CheckVerifyComponent } from './check-verify/check-verify.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectVerifyComponent } from './select-verify/select-verify.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },{
    path:'checkverify',
    component:CheckVerifyComponent
  },{
    path:'selectverify',
    component:SelectVerifyComponent
  },
  {
    path:'registerteacher',
    component:RegisterTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
