import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() first_Name:string="";
  @Input() last_Name:string="";
  @Input() image:string|undefined;
  @Input() color:string="";
  constructor( private router :Router,public teacherService:TeacherService) { }

  ngOnInit(): void {
  }



  GoToHome(){
    this.router.navigate(['teacher/home'])
  }
  UpdateProfile(){
    this.router.navigate(['teacher/updateprofile'])
  }
  Logout(){
    this.router.navigate([''])
  }

}
