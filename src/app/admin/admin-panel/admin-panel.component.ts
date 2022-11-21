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

  constructor(private router:Router ,private adminService:AdminService) { }


  ngOnInit(): void {
  }


  OpenCourses(){

    
    this.router.navigate(['AllCourses']);

  }

}
