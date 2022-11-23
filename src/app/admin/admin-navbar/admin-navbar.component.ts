import { AdminService } from 'src/app/Services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})

export class AdminNavbarComponent implements OnInit {
name:any="";
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }
 
}
