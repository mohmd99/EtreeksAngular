import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.css']
})
export class ProfileTeacherComponent implements OnInit {

  @ViewChild('callLocationDailog') callLocation!:TemplateRef<any>

  constructor(public dialog:MatDialog,public teacherService:TeacherService  ,public adminService:AdminService,private authService : AuthService) { }
  unvisible=false;
  userData:any;
  loginData:any;
 
  ngOnInit(): void {
    this.adminService.getuserbyid(this.authService.data.ID);
    this.userData=this.adminService.userbyid;
    this.loginData=this.teacherService.loginuserbyid;
   
    this.teacherService.getTraineruserbyid(this.authService.data.ID)

    console.log("this.loginData");
    console.log(this.loginData);
    
    this.updateForm.controls['image'].setValue(this.userData.image);
    this.updateForm.controls['location'].setValue(this.teacherService.Traineruserbyid.location);
    
    
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
      Role_Id: new FormControl(),
      location : new FormControl()


    });

    Changepass(ev:any){
      if(this.adminService.loginuserbyid.password==ev.target.value)
      this.changepass=true;
    }

    UpdateProfile(){
// Traineruserbyid;
      if(this.updateForm.controls['password'].value==null)
      this.updateForm.controls['password'].setValue(this.loginData.password);

      this.updateForm.controls['birth_Date'].setValue(this.userData.birth_Date);
      this.updateForm.controls['Verify_Code'].setValue(this.loginData.verify_Code);
      this.updateForm.controls['Role_Id'].setValue(this.loginData.role_Id);
      this.updateForm.controls['Id'].setValue(this.loginData.id);
      this.updateForm.controls['User_Id'].setValue(this.userData.id);
      this.updateForm.controls['birth_Date'].setValue(this.userData.birth_Date);
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
      this.adminService.uploadAttachmentuser(formData);
  
    }


    
    OpenLocationDialog(){

      this.dialog.open(this.callLocation);
    }

display : any;
center: google.maps.LatLngLiteral = {lat: 31.9539, lng: 35.9106};
zoom = 10;
markerOptions: google.maps.MarkerOptions = {draggable: false};

//temp value
markerPosition: google.maps.LatLngLiteral={lat: 31.9539, lng: 35.9106} ;

// select(event: google.maps.MapMouseEvent) {
//   if(event.latLng != null)
//   this.display = event.latLng.toJSON();
// }
selectedPosition:any
addMarker(event: google.maps.MapMouseEvent) {
  if(event.latLng != null)
  this.markerPosition=event.latLng.toJSON();
  this.selectedPosition= JSON.stringify(this.markerPosition);
}

ConfirmLocation(){

  this.updateForm.controls['location'].setValue(this.selectedPosition);
  console.log(this.updateForm.controls['location'].value);
}
}

