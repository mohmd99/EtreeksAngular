import { AdminService } from './../../Services/admin.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog}from '@angular/material/dialog';


@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})

export class ManageCoursesComponent implements OnInit {
@ViewChild('CreateCourseDialoug') callCreateCourse!:TemplateRef<any>;

 unvisible=false;

  createForm:FormGroup=new FormGroup
  ({
    coursE_NAME:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    cat_Id:new FormControl(0,Validators.required),    
    image:new FormControl()
  });

  constructor(public adminService:AdminService ,public generalService:GeneralService,public dialog:MatDialog) { }


  ngOnInit(): void {
    this.adminService.getcoursewithcategory();
  }

  UploadFile(file:any){
    if(file.length==0)
    {
      return;
    }
    let filetoupload=<File>file[0];
    const formData=new FormData();
    formData.append(file,filetoupload,filetoupload.name);
    this.adminService.uploadAttachment(formData);

  }

  OpenCreateDialouge()
  {
    this.unvisible=true;
    this.generalService.getAllCategory();
    
    this.dialog.open(this.callCreateCourse);

    //console.log(this.createForm.value)

  }

  SaveData(){
   debugger;
  //  this.createForm.controls['cat_Id'].value:Number;
    console.log(this.createForm.value);
    this.adminService.createCourse(this.createForm.value);
    this.unvisible=false;
  }

}
