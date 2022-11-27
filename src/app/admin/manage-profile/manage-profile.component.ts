import { AdminService } from 'src/app/Services/admin.service';
import { AdminModule } from './../admin.module';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  userData=this.adminService.loginuserbyid;
  changepass:boolean=false;
  updateForm:FormGroup=new FormGroup
    ({
      "id":new FormControl(),
      first_Name: new FormControl('',Validators.required),
      last_Name: new FormControl('',Validators.required),
      phone_Number: new FormControl('',Validators.required),
      birth_Date: new FormControl(),
      image: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),


    });

    Changepass(ev:any){
      if(this.adminService.loginuserbyid.password==ev.target.value)
      this.changepass=true;
    }

    UpdateProfile(){

    }

}
