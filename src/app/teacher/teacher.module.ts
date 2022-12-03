import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { HomeComponent } from './home/home.component';
import { BarComponent } from './bar/bar.component';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';
import { SharedModule } from '../shared/shared.module';
import { ContactTeacherComponent } from './contact-teacher/contact-teacher.component';
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';
import { CalenderComponent } from './calender/calender.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [
    HomeComponent,
    BarComponent,
    ProfileTeacherComponent,
    ContactTeacherComponent,
    AboutTeacherComponent,
    CalenderComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class TeacherModule { }
