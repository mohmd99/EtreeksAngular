import { AuthService } from 'src/app/Services/auth.service';
import { StudentService } from 'src/app/Services/student.service';
import { StudentModule } from './../student/student.module';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../Services/general.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public studentService:StudentService,public authService:AuthService ,public generalService:GeneralService) { }

  ngOnInit(): void {
  }

}
