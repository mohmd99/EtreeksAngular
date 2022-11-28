import { AuthService } from 'src/app/Services/auth.service';
import { AdminService } from 'src/app/Services/admin.service';
import { AdminModule } from './../../admin/admin.module';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {

  constructor(public adminService :AdminService,private authService:AuthService) { }

  ngOnInit(): void {
    this.adminService.getuserbyid(this.authService.data.ID);
    this.adminService.getloginuserbyid(this.authService.data.ID);
  }
}
