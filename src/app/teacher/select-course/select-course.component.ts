import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.css']
})
export class SelectCourseComponent implements OnInit {

  @ViewChild('CreateTimeDialoug') callCreateTime!:TemplateRef<any>;
  @ViewChild('DeleteDailog') callDeleteTime!:TemplateRef<any>;
  createForm:FormGroup=new FormGroup
  ({
    trainer_Id:new FormControl(),
    start_Date:new FormControl('',Validators.required),
    end_Date:new FormControl('',Validators.required)
    
  });

  constructor(public dialog:MatDialog,public generalService :GeneralService,public adminService:AdminService,private authService:AuthService,public teacherService:TeacherService) { }

  ngOnInit(): void {
    this.teacherService.GetCourses(this.authService.data.ID);
  }

  OpenCreateDialouge(){}
  openDeleteDailog(id:number){}
  SaveData(){}

}
