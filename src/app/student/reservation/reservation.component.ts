import { AuthService } from 'src/app/Services/auth.service';
import { StudentService } from './../../Services/student.service';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['../../teacher/manage-available-time/manage-available-time.component.css','./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  // './reservation.component.css'

  constructor(private router:Router,public teacherService: TeacherService,public studentService:StudentService,private authService:AuthService) { }

  ngOnInit(): void {
    this.studentService.getuserbyid(this.authService.data.ID);
    this.studentService.GetAllReservations(this.authService.data.ID);
  }

  
  locationLink:any;
  OpenLocation(item:any){
    debugger

    console.log(item.location)
    let lctn= JSON.parse(item.location);
    console.log(lctn);
   
    this.locationLink="https://www.google.com/maps/?q="+lctn.lat.toString()+","+lctn.lng;
    window.open(this.locationLink,'_blank');





  }

}
