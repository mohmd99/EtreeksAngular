import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from '../Services/general.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {


  constructor( public generalServise:GeneralService ) { }

  ngOnInit(): void {
  }

 

}
