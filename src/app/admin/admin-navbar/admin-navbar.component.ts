import { AdminService } from 'src/app/Services/admin.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})

export class AdminNavbarComponent implements OnInit {
name:any="";
@Input() first_Name:string="";
@Input() last_Name:string="";
@Input() image:string|undefined;
@Input() color:string="";

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    console.log(this.first_Name)



  }





}
