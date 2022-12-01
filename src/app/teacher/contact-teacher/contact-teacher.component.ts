import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { HomeService } from 'src/app/Services/home.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-contact-teacher',
  templateUrl: './contact-teacher.component.html',
  styleUrls: ['./contact-teacher.component.css']
})
export class ContactTeacherComponent implements OnInit {
  @ViewChild('CreateDialoug') callCreate!:TemplateRef<any>;
  unvisible=false;
  createForm : FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    message : new FormControl('' ,Validators.required)
  });
  constructor(public teacherService:TeacherService , public authService:AuthService , public homeService:HomeService , private router:Router) { }

  ngOnInit(): void {
    this.teacherService.getuserbyid(this.authService.data.ID);
  }
  SaveData(){
    console.log(this.createForm.value);
    this.homeService.CreateContactUs(this.createForm.value);
    this.unvisible=false;
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
