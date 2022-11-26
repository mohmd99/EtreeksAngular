import { AdminService } from 'src/app/Services/admin.service';
import { AdminModule } from './../admin.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})
export class ManageProfileComponent implements OnInit {

  constructor(public adminService:AdminService) { }
  unvisible=false
  ngOnInit(): void {
  }

}
