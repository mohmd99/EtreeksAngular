import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent implements OnInit {

  constructor(public authService :AuthService,public studentService:StudentService,public generalServise:GeneralService,public adminService:AdminService,private router:Router) { }

  ngOnInit(): void {



    console.log(this.authService.data.ID);

    this.generalServise.GetHomeInfo();
    this.generalServise.GetAllCourses();
    this.generalServise.getAllCategory();
    this.adminService.getTestimonial();

    this.studentService.getuserbyid(this.authService.data.ID);
  }
  OpenCategory(id:number){

    this.generalServise.getCoursesbyCategoryId(id);
    this.router.navigate(['Category']);

  }
}
