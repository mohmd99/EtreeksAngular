import { StudentService } from 'src/app/Services/student.service';
import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from '../Services/general.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {


  constructor( public generalServise:GeneralService,public studentService:StudentService ) { }

  ngOnInit(): void {
    this.studentService.GetTrainerByCourseId(this.generalServise.retreavedCourse.id);
  }



}
