import { AdminService } from './../../Services/admin.service';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})
export class ManageCoursesComponent implements OnInit {

  constructor(public adminService:AdminService) { }


  ngOnInit(): void {
    this.adminService.getcoursewithcategory();
  }

}
