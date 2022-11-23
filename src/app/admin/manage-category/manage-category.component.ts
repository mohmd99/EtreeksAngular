import { AdminService } from './../../Services/admin.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog}from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})
export class ManageCategoryComponent implements OnInit {
  @ViewChild('CreateDialoug') callCreate!:TemplateRef<any>;
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
   unvisible=false;

    createForm:FormGroup=new FormGroup
    ({
      categorY_NAME:new FormControl('',Validators.required),image:new FormControl(),
      description:new FormControl('',Validators.required)

    });

    constructor(public adminService:AdminService ,public generalService:GeneralService,public dialog:MatDialog,private router: Router) { }


    ngOnInit(): void {
      this.generalService.getAllCategory();
    }

    UploadFile(file:any){
      if(file.length==0)
      {
        return;
      }
      let filetoupload=<File>file[0];
      const formData=new FormData();
      formData.append(file,filetoupload,filetoupload.name);
      this.adminService.uploadAttachmentCategory(formData);

    }

    OpenCreateDialouge()
    {
      this.unvisible=true;


      this.dialog.open(this.callCreate);

      //console.log(this.createForm.value)

    }

    SaveData(){


    //  this.createForm.controls['cat_Id'].value:Number;
      console.log(this.createForm.value);
      this.adminService.createCategory(this.createForm.value);
      this.unvisible=false;


      // this.router.navigate(['AllCourses']);

    }

    p_data:any={};
    updateForm:FormGroup=new FormGroup
    ({categorY_NAME:new FormControl('',Validators.required),
      id:new FormControl(),
image:new FormControl(),
      description:new FormControl('',Validators.required),

    });


    openUpdateDailog(obj:any){




      this.p_data={
        id:obj.id,
        categorY_NAME:obj.categorY_NAME,
        description:obj.description,

        image:obj.image
      }


      this.updateForm.controls['id'].setValue(this.p_data.id);
      this.updateForm.controls['image'].setValue(this.p_data.image);

      this.dialog.open(this.callUpdate);

      console.log(obj);
    }
    updateData(){
      console.log(this.updateForm.value);
      this.adminService.updateCategory(this.updateForm.value);


    }
    openDeleteDailog(id:number){
      const dialogRef=  this.dialog.open(this.callDelete);
      dialogRef.afterClosed().subscribe((result)=>{
        if(result!=undefined)
        {
          if(result=='yes')
          {
            console.log(id);


            this.adminService.deleteCategory(id);
          }

            else if(result=='no')
            console.log('thank you ');

        }
      })
    }
  }

