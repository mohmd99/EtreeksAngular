import { AdminService } from './../../Services/admin.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-allcourse-student',
  templateUrl: './allcourse-student.component.html',
  styleUrls: ['./allcourse-student.component.css']
})
export class AllcourseStudentComponent implements OnInit {

  constructor(public generalServise:GeneralService , public studentService:StudentService , public authService:AuthService,public adminService:AdminService) { }

  ngOnInit(): void {
    this.generalServise.GetAllCourses();
    this.generalServise.allCourses;
    this.studentService.getuserbyid(this.authService.data.ID);

  }
  filtercourse:any;
  Search(ev:any){
    if (ev.target.value=='')
    {
       this.generalServise.GetAllCourses();


    }


    else
    this.generalServise.SearchCourse(ev.target.value);

  }
}
