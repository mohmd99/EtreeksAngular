import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ContactStudentComponent } from './contact-student/contact-student.component';
import { AboutStudentComponent } from './about-student/about-student.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { HomeCourseComponent } from './home-course/home-course.component';


@NgModule({
    declarations: [
        ContactStudentComponent,
        AboutStudentComponent,
        HomeStudentComponent,
        ProfileStudentComponent,
        HomeCourseComponent
    ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        SharedModule
        
    ]
})
export class StudentModule { }
