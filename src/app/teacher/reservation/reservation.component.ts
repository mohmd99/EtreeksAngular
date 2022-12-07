import { AdminService } from './../../Services/admin.service';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['../manage-available-time/manage-available-time.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(public teacherService:TeacherService,public adminService:AdminService) { }

  ngOnInit(): void {
    debugger
    this.teacherService.getReservationRequest(this.teacherService.Traineruserbyid[0].id);
  }
  openAcceptDailog(item:any){

  }
  openRejectDailog(item:any){

  }
}
