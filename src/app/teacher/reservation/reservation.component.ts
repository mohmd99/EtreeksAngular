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
  filteredreservation:any
  search(ev:any){
    if(ev.target.value!=''){
      this.filteredreservation=this.teacherService.reservationRequest.filter((x:any)=>x.first_Name.toLowerCase().includes(ev.target.value.toLowerCase()))
    }else
    this.filteredreservation=this.teacherService.reservationRequest;
  }
  updateForm:FormGroup=new FormGroup
  ({

    id:new FormControl(),
    avaliable_time_id:new FormControl(),
    status:new FormControl(),
    user_Id:new FormControl(),
    trainer_Course_Id:new FormControl()

  });
  panelOpenState = false;
  ngOnInit(): void {
    debugger
    this.teacherService.getReservationRequest(this.teacherService.Traineruserbyid[0].id);
    setTimeout(() => {
this.filteredreservation=this.teacherService.reservationRequest;
    }, 1000);

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
          this.teacherService.updatestatus(obj.avaliable_time_id,1);
          if(this.updateForm.controls['status'].value!=null)
          this.teacherService.sendEmailResrvation(obj.loginid,this.updateForm.controls['status'].value);
        }

          else if(result=='no')
          console.log('thank you ');


      }
    })
  }
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  start:any;
  end:any;
  showclear=false;
  clear(){
    this.filteredreservation=this.teacherService.reservationRequest;
    this.range.controls['start'].setValue(null);
    this.range.controls['end'].setValue(null);
    this.showSearch=!this.showSearch;
    this.showclear=false
  }
  searchPeriod(){
this.start=this.range.controls['start'].value?.toJSON();
this.end=this.range.controls['end'].value?.toJSON();
console.log(this.start);

    if(this.range.controls['start'].value!=null){
      this.filteredreservation=this.teacherService.reservationRequest.filter((x:any)=>x.start_Date>=this.start&&x.end_Date<this.end)
      this.showclear=true;
    }else
    this.filteredreservation=this.teacherService.reservationRequest;
  }
  showSearch:any=false;
  showsearch(){
    this.showSearch=!this.showSearch;
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
          this.teacherService.updatestatus(obj.avaliable_time_id,null);
          if(this.updateForm.controls['status'].value!=null)
          this.teacherService.sendEmailResrvation(obj.loginid,this.updateForm.controls['status'].value);
        }

          else if(result=='no')
          console.log('thank you ');


      }
    })
  }
}
