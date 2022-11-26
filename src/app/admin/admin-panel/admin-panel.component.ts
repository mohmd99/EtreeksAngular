import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router ,public adminService:AdminService) { }


  ngOnInit(): void {
    this.adminService.getuserbyid(this.authService.data.ID);
  }


  myName:string=this.adminService.userbyid.first_Name;
 

  OpenCourses(){


    this.router.navigate(['AllCourses']);

  }

}
