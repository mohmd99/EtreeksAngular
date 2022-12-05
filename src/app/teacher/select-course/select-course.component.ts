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

  @ViewChild('CreateTimeDialoug') callCreate!:TemplateRef<any>;
  @ViewChild('DeleteDailog') callDelete!:TemplateRef<any>;
  createForm:FormGroup=new FormGroup
  ({
    course_Id:new FormControl(),
    trainer_Id:new FormControl(),


  });

  constructor(public dialog:MatDialog,public generalService :GeneralService,public adminService:AdminService,private authService:AuthService,public teacherService:TeacherService) { }

  ngOnInit(): void {
    this.teacherService.GetCourses(this.authService.data.ID);
    this.teacherService.getTraineruserbyid(Number(this.authService.data.ID));


  }


  OpenCreateDialouge(){


     this.generalService.getCoursesbyCategoryId(this.teacherService.Traineruserbyid[0].cat_Id);

    console.log(this.generalService.coursesbycategory);
    this.dialog.open(this.callCreate);
  }
  openDeleteDailog(id:number){
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          console.log(id);


          this.teacherService.deleteTrainerCourse(id);
        }

          else if(result=='no')
          console.log('thank you ');

      }
    })
  }
  SaveData(){


    this.createForm.controls['trainer_Id'].setValue(this.teacherService.Traineruserbyid[0].id);
    console.log(this.createForm.value);
    this.teacherService.createtrainercourse(this.createForm.value)
  }

}
