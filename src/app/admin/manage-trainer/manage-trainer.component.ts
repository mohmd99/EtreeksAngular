import { AdminService } from 'src/app/Services/admin.service';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-trainer',
  templateUrl: './manage-trainer.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})
export class ManageTrainerComponent implements OnInit {

  constructor(public teacherService:TeacherService,public dialog:MatDialog,private router: Router,public adminService:AdminService) { }

  @ViewChild('callAcceptDailog') callAccept!:TemplateRef<any>
  @ViewChild('callRejectDailog') callReject!:TemplateRef<any>
   unvisible=false;
  ngOnInit(): void {
    this.teacherService.getTrainerUser();
  }



  p_data:any={};
  updateForm:FormGroup=new FormGroup
  ({id:new FormControl('',Validators.required),
  certificate:new FormControl('',Validators.required),
  cat_Id:new FormControl(),
  cv:new FormControl(''),
  location:new FormControl(''),
  status:new FormControl('',Validators.required),
  user_Id:new FormControl(Number,Validators.required),

  });


  openAcceptDailog(obj:any){




    this.p_data={
      id:obj.id,
      location:obj.location,
      certificate:obj.certificate,
      cat_Id:obj.cat_Id,
      cv:obj.cv,
      status:obj.status,
      user_Id:obj.user_Id

    }


    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.updateForm.controls['location'].setValue(this.p_data.location);
    this.updateForm.controls['certificate'].setValue(this.p_data.certificate);
    this.updateForm.controls['cat_Id'].setValue(this.p_data.cat_Id);
    this.updateForm.controls['cv'].setValue(this.p_data.cv);

    this.updateForm.controls['status'].setValue(1);
    this.updateForm.controls['user_Id'].setValue(this.p_data.user_Id);

    const dialogRef=  this.dialog.open(this.callAccept);
    console.log(this.updateForm.value);

    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {


          console.log(this.updateForm.value);
          this.adminService.updateTeacher(this.updateForm.value);
          this.adminService.sendEmailTrainer(this.updateForm.controls['id'].value);
        }

          else if(result=='no')
          console.log('thank you ');

      }
    })

  }

  openRejectDailog(obj:any){


    this.p_data={
      id:obj.id,
      location:obj.location,
      certificate:obj.certificate,
      cat_Id:obj.cat_Id,
      cv:obj.cv,
      status:obj.status,
      user_Id:obj.user_Id

    }



    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.updateForm.controls['location'].setValue(this.p_data.location);
    this.updateForm.controls['certificate'].setValue(this.p_data.certificate);
    this.updateForm.controls['cat_Id'].setValue(this.p_data.cat_Id);
    this.updateForm.controls['cv'].setValue(this.p_data.cv);

    this.updateForm.controls['status'].setValue(0);
    this.updateForm.controls['user_Id'].setValue(this.p_data.user_Id);

    const dialogRef=  this.dialog.open(this.callReject);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {



          this.adminService.updateTeacher(this.updateForm.value);
          this.adminService.sendEmailTrainer(this.updateForm.controls['id'].value);
        }

          else if(result=='no')
          console.log('thank you ');

      }
    })

  }
}
