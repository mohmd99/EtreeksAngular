import { Component, OnInit } from '@angular/core';

import { Toast, ToastrService } from 'ngx-toastr';

import { GeneralService } from '../Services/general.service';


@Component({
  selector: 'app-guest-course-page',
  templateUrl: './guest-course-page.component.html',
  styleUrls: ['./guest-course-page.component.css']
})
export class GuestCoursePageComponent implements OnInit {
 
  constructor(private toaster:ToastrService, public generalServise:GeneralService ) { }

  ngOnInit(): void {
    this.generalServise.GetAllCourses();

  }
  



}
