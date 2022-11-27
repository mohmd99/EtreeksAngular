import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-about-student',
  templateUrl: './about-student.component.html',
  styleUrls: ['./about-student.component.css']
})
export class AboutStudentComponent implements OnInit {

  constructor(public generalService:GeneralService , public adminService:AdminService) { }

  ngOnInit(): void {
    this.generalService.getabout();
  }

}
