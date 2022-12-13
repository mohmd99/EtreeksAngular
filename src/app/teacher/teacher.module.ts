import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { HomeComponent } from './home/home.component';
import { BarComponent } from './bar/bar.component';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';
import { SharedModule } from '../shared/shared.module';
import { ContactTeacherComponent } from './contact-teacher/contact-teacher.component';
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';

import { ManageAvailableTimeComponent } from './manage-available-time/manage-available-time.component';
import { SelectCourseComponent } from './select-course/select-course.component';
import { ReservationComponent } from './reservation/reservation.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule,} from '@angular/material/datepicker';

import { AdminModule } from '../admin/admin.module';


import { MatNativeDateModule } from '@angular/material/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RatingModule } from 'ngx-bootstrap/rating';

@NgModule({
  declarations: [
    HomeComponent,
    BarComponent,
    ProfileTeacherComponent,
    ContactTeacherComponent,
    AboutTeacherComponent,
    ManageAvailableTimeComponent,
    SelectCourseComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,

    SharedModule,MatExpansionModule,MatDatepickerModule,MatNativeDateModule,
    AdminModule,
    GoogleMapsModule,
    RatingModule.forRoot()

  ]
})
export class TeacherModule { }
