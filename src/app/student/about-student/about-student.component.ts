import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-about-student',
  templateUrl: './about-student.component.html',
  styleUrls: ['./about-student.component.css']
})
export class AboutStudentComponent implements OnInit {

  constructor(public generalService:GeneralService , public adminService:AdminService , public studentService:StudentService, public authService:AuthService) { }

  ngOnInit(): void {
    this.studentService.getuserbyid(this.authService.data.ID);
    this.generalService.getabout();
  }

}
