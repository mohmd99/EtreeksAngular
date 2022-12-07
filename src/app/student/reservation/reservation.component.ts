import { AuthService } from 'src/app/Services/auth.service';
import { StudentService } from './../../Services/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(public studentService:StudentService,private authService:AuthService) { }

  ngOnInit(): void {
    this.studentService.getuserbyid(this.authService.data.ID);
  }

}
