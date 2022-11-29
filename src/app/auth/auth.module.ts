import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectVerifyComponent } from './select-verify/select-verify.component';
import { CheckVerifyComponent } from './check-verify/check-verify.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SelectVerifyComponent,
    CheckVerifyComponent,
    RegisterTeacherComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ]
})
export class AuthModule { }
