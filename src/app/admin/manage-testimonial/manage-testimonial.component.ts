import { AdminService } from './../../Services/admin.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog}from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-testimonial',
  templateUrl: './manage-testimonial.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})
export class ManageTestimonialComponent implements OnInit {

  @ViewChild('callAcceptDailog') callAccept!:TemplateRef<any>
  @ViewChild('callRejectDailog') callReject!:TemplateRef<any>
   unvisible=false;



    constructor(public adminService:AdminService ,public generalService:GeneralService,public dialog:MatDialog,private router: Router) { }


    ngOnInit(): void {
      this.adminService.getTestimonial();
      this.adminService.getGuestTestimonial();
    }







    p_data:any={};
    Guestp_data:any={};
    updateForm:FormGroup=new FormGroup
    ({id:new FormControl('',Validators.required),
    text:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required),
    user_Id:new FormControl(Number,Validators.required),

    });





    openAcceptDailog(obj:any){

      this.p_data={
        id:obj.id,
        text:obj.text,
        status:obj.status,
        user_Id:obj.user_Id
      }


      this.updateForm.controls['id'].setValue(this.p_data.id);
      this.updateForm.controls['text'].setValue(this.p_data.text);
      this.updateForm.controls['status'].setValue(1);
      this.updateForm.controls['user_Id'].setValue(this.p_data.user_Id);

      const dialogRef=  this.dialog.open(this.callAccept);
      dialogRef.afterClosed().subscribe((result)=>{
        if(result!=undefined)
        {
          if(result=='yes')
          {


            console.log(this.updateForm.value);
            this.adminService.updateTestimonial(this.updateForm.value);
          }

            else if(result=='no')
            console.log('thank you ');

        }
      })

    }

    openRejectDailog(obj:any){


      this.p_data={
        id:obj.id,
        text:obj.text,
        status:obj.status,
        user_id:obj.user_id

      }


      this.updateForm.controls['id'].setValue(this.p_data.id);
      this.updateForm.controls['text'].setValue(this.p_data.text);
      this.updateForm.controls['status'].setValue(0);
      this.updateForm.controls['user_id'].setValue(this.p_data.user_id);

      const dialogRef=  this.dialog.open(this.callReject);
      dialogRef.afterClosed().subscribe((result)=>{
        if(result!=undefined)
        {
          if(result=='yes')
          {



            this.adminService.updateTestimonial(this.updateForm.value);
          }

            else if(result=='no')
            console.log('thank you ');

        }
      })

    }





    openGuestAcceptDailog(obj:any){

      this.Guestp_data={
        id:obj.id,
        status:obj.status,
       }

      const dialogRef=  this.dialog.open(this.callAccept);
      dialogRef.afterClosed().subscribe((result)=>{
        if(result!=undefined)
        {
          if(result=='yes')
          {


            console.log(this.updateForm.value);
            this.adminService.updateGuestTestimonial(this.Guestp_data.id,1);
          }

            else if(result=='no')
            console.log('thank you ');

        }
      })

    }

    openGuestRejectDailog(obj:any){


      this.Guestp_data={
        id:obj.id,
        status:obj.status,

      }



      const dialogRef=  this.dialog.open(this.callReject);
      dialogRef.afterClosed().subscribe((result)=>{
        if(result!=undefined)
        {
          if(result=='yes')
          {



            this.adminService.updateGuestTestimonial(this.Guestp_data.id,0);
          }

            else if(result=='no')
            console.log('thank you ');

        }
      })

    }


  }

