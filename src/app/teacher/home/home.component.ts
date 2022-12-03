import { AdminService } from './../../Services/admin.service';
import { AdminModule } from './../../admin/admin.module';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public adminService:AdminService,public teacherService:TeacherService,public authService:AuthService ,private router:Router,public generalService:GeneralService) { }

  ngOnInit(): void {

    this.adminService.getuserbyid(this.authService.data.ID);
    this.teacherService.getloginuserbyid(this.authService.data.ID);
  }



}
