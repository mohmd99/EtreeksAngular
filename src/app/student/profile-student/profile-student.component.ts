import { AuthService } from 'src/app/Services/auth.service';
import { AdminService } from 'src/app/Services/admin.service';
import { AdminModule } from './../../admin/admin.module';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {

  constructor(public adminService :AdminService,public studentService:StudentService,private authService:AuthService) { }
  @Input() image:string|undefined;
  unvisible=false;
  userData:any;
  loginData:any;
  ngOnInit(): void {
    this.studentService.getuserbyid(this.authService.data.ID);
    this.userData=this.studentService.userbyid;
    this.loginData=this.studentService.loginuserbyid;
    this.updateForm.controls['image'].setValue(this.userData.image);
 
    this.studentService.getloginuserbyid(this.authService.data.ID);
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
      if(this.studentService.loginuserbyid.password==ev.target.value)
      this.changepass=true;
    }

    UpdateProfile(){

      if(this.updateForm.controls['password'].value==null)
      this.updateForm.controls['password'].setValue(this.loginData.password);

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
      this.studentService.updateUserlogin(this.updateForm.value);

    }
    UploadFile(file:any){
      if(file.length==0)
      {
        return;
      }
      let filetoupload=<File>file[0];
      const formData=new FormData();
      formData.append(file,filetoupload,filetoupload.name);
      this.studentService.uploadAttachmentuser(formData);
  
    }
}
