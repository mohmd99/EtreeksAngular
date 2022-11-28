import { AdminService } from './../../Services/admin.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog}from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})

export class ManageCoursesComponent implements OnInit {
@ViewChild('CreateCourseDialoug') callCreateCourse!:TemplateRef<any>;
@ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
@ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
 unvisible=false;

  createForm:FormGroup=new FormGroup
  ({
    coursE_NAME:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    cat_Id:new FormControl(Number,Validators.required),
    image:new FormControl()
  });

  constructor(private spinner:NgxSpinnerService,public adminService:AdminService ,public generalService:GeneralService,public dialog:MatDialog,private router: Router) { }

  name:any=''

  ngOnInit(): void {

    this.spinner.show();
    if (this.name==''){

      this.adminService.getcoursewithcategory();
    }

    
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


  //  this.createForm.controls['cat_Id'].value:Number;
    console.log(this.createForm.value);
    this.adminService.createCourse(this.createForm.value);
    this.unvisible=false;
    window.location.reload();

    // this.router.navigate(['AllCourses']);

  }

  p_data:any={};
  updateForm:FormGroup=new FormGroup
  ({
    id:new FormControl(),
    coursE_NAME:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    cat_Id:new FormControl(Number,Validators.required),
    image:new FormControl()
  }); 
   getcategory=this.generalService.allcategories;

  openUpdateDailog(obj:any){

    this.generalService.getAllCategory();


    this.p_data={
      id:obj.id,
      coursE_NAME:obj.coursE_NAME,
      description:obj.description,
      cat_Id:obj.cat_Id,
      image:obj.image
    }


    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.updateForm.controls['image'].setValue(this.p_data.image);

    this.dialog.open(this.callUpdate);

    console.log(obj);
  }
  updateData(){
    console.log(this.updateForm.value);
    this.adminService.updateCourse(this.updateForm.value);


  }
  openDeleteDailog(id:number){
    const dialogRef=  this.dialog.open(this.callDelete);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          console.log(id);

          
          this.adminService.deleteCourse(id);
        }

          else if(result=='no')
          console.log('thank you ');

      }
    })
  }


  Search(ev:any){
    this.name=ev.target.value;
    if(this.name!=''){

       this.adminService.SearchCourse(this.name);

      console.log(this.adminService.AllUser);
    }else{
      this.adminService.getUser();
    }

  }
}
