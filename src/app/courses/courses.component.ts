import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../Services/general.service';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() coursE_NAME:string|undefined;
  @Input() description:string|undefined;
  @Input() id:number=0;
  
  constructor(public studentService:StudentService,public generalService:GeneralService,private router:Router ) { }

  ngOnInit(): void {
   
  }
  ShowCourse(id:number){
 
    this.generalService.GetCourseById(id);    
    
    this.router.navigate(['Course']);

  }
  

}
