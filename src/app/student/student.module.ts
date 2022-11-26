import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from '../courses/courses.component';

import { SharedModule } from '../shared/shared.module';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        SharedModule
        
    ]
})
export class StudentModule { }
