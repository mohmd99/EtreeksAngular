import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-course-student',
  templateUrl: './course-student.component.html',
  styleUrls: ['./course-student.component.css']
})
export class CourseStudentComponent implements OnInit {
  @Input() coursE_NAME:string|undefined;
  @Input() description:string|undefined;
  @Input() trainer_Id:number|undefined;
  @Input() course_Id:number|undefined;
  @Input() image:string|undefined;
  @Input() id:number=0;
  constructor(public generalServise:GeneralService , private router:Router) { }

  ngOnInit(): void {
    
  }
  ShowCourse(id:number){
    this.generalServise.GetCourseById(id);
    this.router.navigate(['Course']);

  }

}
