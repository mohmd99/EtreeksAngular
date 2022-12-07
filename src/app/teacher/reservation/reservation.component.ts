import { AdminService } from './../../Services/admin.service';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['../manage-available-time/manage-available-time.component.css']
})
export class ReservationComponent implements OnInit {
  @ViewChild('callAcceptDailog') callAccept!:TemplateRef<any>
  @ViewChild('callRejectDailog') callReject!:TemplateRef<any>
  constructor(public dialog:MatDialog,public teacherService:TeacherService,public adminService:AdminService) { }
  updateForm:FormGroup=new FormGroup
  ({

    id:new FormControl(),
    avaliable_time_id:new FormControl(),
    status:new FormControl(),
    user_Id:new FormControl(),
    trainer_Course_Id:new FormControl()

  });
  ngOnInit(): void {
    debugger
    this.teacherService.getReservationRequest(this.teacherService.Traineruserbyid[0].id);
  }
  p_data:any;
  openAcceptDailog(obj:any){



    this.p_data={
      id:obj.id,
      avaliable_time_id:obj.avaliable_time_id,
      trainer_Course_Id:obj.trainer_Course_Id,
      status:obj.status,
      user_Id:obj.user_Id

    }


    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.updateForm.controls['avaliable_time_id'].setValue(this.p_data.avaliable_time_id);
    this.updateForm.controls['trainer_Course_Id'].setValue(this.p_data.trainer_Course_Id);
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
          this.teacherService.updateReservation(this.updateForm.value);
          this.teacherService.deleteAvailabletime(obj.avaliable_time_id)
          if(this.updateForm.controls['status'].value!=null)
          this.teacherService.sendEmailResrvation(obj.loginid,this.updateForm.controls['status'].value);
        }

          else if(result=='no')
          console.log('thank you ');


      }
    })
  }
  openRejectDailog(obj:any){



    this.p_data={
      id:obj.id,
      avaliable_time_id:obj.avaliable_time_id,
      trainer_Course_Id:obj.trainer_Course_Id,
      status:obj.status,
      user_Id:obj.user_Id

    }


    this.updateForm.controls['id'].setValue(this.p_data.id);
    this.updateForm.controls['avaliable_time_id'].setValue(this.p_data.avaliable_time_id);
    this.updateForm.controls['trainer_Course_Id'].setValue(this.p_data.trainer_Course_Id);
    this.updateForm.controls['status'].setValue(0);
    this.updateForm.controls['user_Id'].setValue(this.p_data.user_Id);



    const dialogRef=  this.dialog.open(this.callAccept);
    console.log(this.updateForm.value);

    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {


          console.log(this.updateForm.value);
          this.teacherService.updateReservation(this.updateForm.value);
          
          if(this.updateForm.controls['status'].value!=null)
          this.teacherService.sendEmailResrvation(obj.loginid,this.updateForm.controls['status'].value);
        }

          else if(result=='no')
          console.log('thank you ');


      }
    })
  }
}
