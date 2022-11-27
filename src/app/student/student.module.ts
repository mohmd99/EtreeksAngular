import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ContactStudentComponent } from './contact-student/contact-student.component';
import { AboutStudentComponent } from './about-student/about-student.component';
import { HomeStudentComponent } from './home-student/home-student.component';


@NgModule({
    declarations: [
        ContactStudentComponent,
        AboutStudentComponent,
        HomeStudentComponent
    ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        SharedModule
        
    ]
})
export class StudentModule { }
