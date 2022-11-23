import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getcontactus();
  }

}
