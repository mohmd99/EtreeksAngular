import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-manage-available-time',
  templateUrl: './manage-available-time.component.html',
  styleUrls: ['./manage-available-time.component.css']
})
export class ManageAvailableTimeComponent implements OnInit {

  constructor(public generalService :GeneralService,public adminService:AdminService,private authService:AuthService,public teacherService:TeacherService) { }

  ngOnInit(): void {
    // this.teacherService.GetAllTimes(this.authService.data.ID)
    console.log(this.teacherService.AvailableTimes);
    
   
  }

  OpenCreateDialouge(){}

  openUpdateDailog(item :any){}
  openDeleteDailog(item :any){}


}
