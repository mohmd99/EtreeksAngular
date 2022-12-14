import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ContactStudentComponent } from './contact-student/contact-student.component';
import { AboutStudentComponent } from './about-student/about-student.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { CourseStudentComponent } from './course-student/course-student.component';
import { AllcourseStudentComponent } from './allcourse-student/allcourse-student.component';
import { CategoryStudentComponent } from './category-student/category-student.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ReservationComponent } from './reservation/reservation.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TestimonialComponent } from './testimonial/testimonial.component';



@NgModule({
    declarations: [
        ContactStudentComponent,
        AboutStudentComponent,
        HomeStudentComponent,
        ProfileStudentComponent,
        CourseStudentComponent,
        AllcourseStudentComponent,
        CategoryStudentComponent,
        ReservationComponent,
        TestimonialComponent,

    ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        SharedModule,MatTabsModule,RatingModule.forRoot()

    ]
})
export class StudentModule { }
