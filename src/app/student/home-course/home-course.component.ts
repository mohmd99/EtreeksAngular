import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-home-course',
  templateUrl: './home-course.component.html',
  styleUrls: ['./home-course.component.css']
})
export class HomeCourseComponent implements OnInit {

  @Input() coursE_NAME:string|undefined;
  @Input() description:string|undefined;
  @Input() id:number=0;

  constructor(public generalService:GeneralService,private router:Router ) { }

  ngOnInit(): void {

  }
  ShowCourse(id:number){
    this.generalService.GetCourseById(id);
    this.router.navigate(['Course']);

  }
}