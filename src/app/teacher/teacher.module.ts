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



@NgModule({
  declarations: [
    HomeComponent,
    BarComponent,
    ProfileTeacherComponent,
    ContactTeacherComponent,
    AboutTeacherComponent,
    ManageAvailableTimeComponent,
    SelectCourseComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule
  ]
})
export class TeacherModule { }
