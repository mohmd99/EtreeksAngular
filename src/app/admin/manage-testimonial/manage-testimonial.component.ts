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
    }







    p_data:any={};
    updateForm:FormGroup=new FormGroup
    ({id:new FormControl('',Validators.required),
    text:new FormControl('',Validators.required),
    status:new FormControl(),
    user_id:new FormControl(),

    });


    openAcceptDailog(obj:any){




      this.p_data={
        id:obj.id,
        text:obj.text,
        status:obj.status,
        user_id:obj.user_id

      }


      this.updateForm.controls['id'].setValue(this.p_data.id);
      this.updateForm.controls['text'].setValue(this.p_data.text);
      this.updateForm.controls['status'].setValue(1);
      this.updateForm.controls['user_id'].setValue(this.p_data.user_id);

      const dialogRef=  this.dialog.open(this.callAccept);
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


  }

