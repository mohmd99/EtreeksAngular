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
  unvisible=false;
  userData:any;
  loginData:any;
  ngOnInit(): void {
    this.userData=this.adminService.userbyid;
    this.loginData=this.adminService.loginuserbyid;
    this.updateForm.controls['image'].setValue(this.userData.image);
  }

  
  changepass:boolean=false;
  updateForm:FormGroup=new FormGroup
    ({
      Id:new FormControl(),
      User_Id:new FormControl(),
      first_Name: new FormControl('',Validators.required),
      last_Name: new FormControl('',Validators.required),
      phone_Number: new FormControl('',Validators.required),
      birth_Date: new FormControl(),
      image: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      Verify_Code: new FormControl(),
      Role_Id: new FormControl()


    });

    Changepass(ev:any){
      if(this.adminService.loginuserbyid.password==ev.target.value)
      this.changepass=true;
    }

    UpdateProfile(){

      
      this.updateForm.controls['Verify_Code'].setValue(this.loginData.verify_Code);
      this.updateForm.controls['Role_Id'].setValue(this.loginData.role_Id);
      this.updateForm.controls['Id'].setValue(this.loginData.id);
      this.updateForm.controls['User_Id'].setValue(this.userData.id);
      console.log("loginData  : ");
      console.log(this.loginData);
      console.log("userData  : ");
      console.log(this.userData);
      console.log("updated info : ");
      console.log(this.updateForm.value);
      this.adminService.updateUserlogin(this.updateForm.value);

    }


    UploadFile(file:any){
      if(file.length==0)
      {
        return;
      }
      let filetoupload=<File>file[0];
      const formData=new FormData();
      formData.append(file,filetoupload,filetoupload.name);
      this.adminService.uploadAttachment(formData);
  
    }

}
