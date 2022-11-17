import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../Services/general.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(public generalServise:GeneralService ) { }

  ngOnInit(): void {
    this.generalServise.GetAllCourses();
  }

}
