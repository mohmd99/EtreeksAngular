import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from '../Services/general.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() coursE_NAME:string|undefined;
  @Input() description:string|undefined;
  constructor(public generalServise:GeneralService ) { }

  ngOnInit(): void {
   
  }

}
