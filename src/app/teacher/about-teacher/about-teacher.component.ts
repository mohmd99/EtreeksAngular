import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-about-teacher',
  templateUrl: './about-teacher.component.html',
  styleUrls: ['./about-teacher.component.css']
})
export class AboutTeacherComponent implements OnInit {

  constructor(public teacherService:TeacherService , public authService:AuthService , public generalService:GeneralService , private router:Router) { }

  ngOnInit(): void {
    this.teacherService.getuserbyid(this.authService.data.ID);
    this.generalService.getabout();
  }
  GoToHome(){
    this.router.navigate(['teacher/home'])
  }
  GoToAbout(){
    this.router.navigate(['teacher/about'])
  }
  GoToContact(){
    this.router.navigate(['teacher/contact'])
  }
  UpdateProfile(){
    this.router.navigate(['teacher/updateprofile'])
  }
  Logout(){
    this.router.navigate([''])
  }
}
