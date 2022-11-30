import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-category-student',
  templateUrl: './category-student.component.html',
  styleUrls: ['./category-student.component.css']
})
export class CategoryStudentComponent implements OnInit {

  constructor(public authService :AuthService,public studentService:StudentService,public generalServise:GeneralService,) { }

  ngOnInit(): void {
    this.generalServise.getAllCategory();
    this.studentService.getuserbyid(this.authService.data.ID);
  }

}
