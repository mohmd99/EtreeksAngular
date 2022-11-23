import { AdminService } from './../../Services/admin.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog}from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})
export class ManageUserComponent implements OnInit {

  @ViewChild('CreateDialoug') callCreate!:TemplateRef<any>;
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
   unvisible=false;



    constructor(public adminService:AdminService ,public generalService:GeneralService,public dialog:MatDialog,private router: Router) { }


    ngOnInit(): void {
      this.adminService.getUser();
    }

    UploadFile(file:any){
      if(file.length==0)
      {
        return;
      }
      let filetoupload=<File>file[0];
      const formData=new FormData();
      formData.append(file,filetoupload,filetoupload.name);
      this.adminService.uploadAttachmentuser(formData);

    }





    p_data:any={};
    updateForm:FormGroup=new FormGroup
    ({
      "id":new FormControl(),
      first_Name: new FormControl('',Validators.required),
      last_Name: new FormControl('',Validators.required),
      phone_Number: new FormControl('',Validators.required),
      birth_Date: new FormControl(),
      image: new FormControl()


    });


    openUpdateDailog(obj:any){



      // let mydate:any;
      // var datePipe = new DatePipe("en-US");
      // mydate = datePipe.transform(obj.birth_Date,'mm/dd/yyyy');

      this.p_data={
        id:obj.id,
        first_Name:obj.first_Name,
        last_Name:obj.last_Name,
        phone_Number:obj.phone_Number,
        birth_Date:obj.birth_Date,
        image:obj.image
      }

      

      this.updateForm.controls['id'].setValue(this.p_data.id);
      this.updateForm.controls['image'].setValue(this.p_data.image);

      this.dialog.open(this.callUpdate);

      console.log(obj);
    }
    updateData(){
      console.log(this.updateForm.value);
      this.adminService.updateUser(this.updateForm.value);


    }
    openDeleteDailog(id:number){
      const dialogRef=  this.dialog.open(this.callDelete);
      dialogRef.afterClosed().subscribe((result)=>{
        if(result!=undefined)
        {
          if(result=='yes')
          {
            console.log(id);


            this.adminService.deleteUser(id);
          }

            else if(result=='no')
            console.log('thank you ');

        }
      })
    }
  }

