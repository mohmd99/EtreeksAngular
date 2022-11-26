import { AuthService } from 'src/app/Services/auth.service';
import { AdminService } from './../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GeneralService } from '../Services/general.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public authService :AuthService,public generalServise:GeneralService,public adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.authService.data.ID);

    this.generalServise.GetHomeInfo();
    this.generalServise.GetAllCourses();
    this.generalServise.getAllCategory();
    this.adminService.getTestimonial();

    this.adminService.getuserbyid(this.authService.data.ID);


  }

  OpenCategory(id:number){

    this.generalServise.getCoursesbyCategoryId(id);
    this.router.navigate(['Category']);

  }

}
