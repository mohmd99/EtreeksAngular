import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-manage-available-time',
  templateUrl: './manage-available-time.component.html',
  styleUrls: ['./manage-available-time.component.css']
})
export class ManageAvailableTimeComponent implements OnInit {
  @ViewChild('CreateTimeDialoug') callCreateTime!:TemplateRef<any>;
  @ViewChild('DeleteDailog') callDeleteTime!:TemplateRef<any>;
  createForm:FormGroup=new FormGroup
  ({
    trainer_Id:new FormControl(),
    start_Date:new FormControl('',Validators.required),
    end_Date:new FormControl('',Validators.required)
    
  });

  constructor(public dialog:MatDialog,public generalService :GeneralService,public adminService:AdminService,private authService:AuthService,public teacherService:TeacherService) { }

  ngOnInit(): void {
    // this.teacherService.GetAllTimes(this.authService.data.ID)
    console.log(this.teacherService.AvailableTimes);
    
   
  }

  OpenCreateDialouge()
  {
    
    this.dialog.open(this.callCreateTime);

    //console.log(this.createForm.value)

  }

  SaveData(){


   let userid=this.authService.data.ID;
    this.createForm.controls['trainer_Id'].setValue(Number(userid));
    console.log(this.createForm.value);
    this.teacherService.createTime(this.createForm.value);
    // window.location.reload();

    // this.router.navigate(['AllCourses']);

  }

  openUpdateDailog(item :any){}
  openDeleteDailog(id:number){
    const dialogRef=  this.dialog.open(this.callDeleteTime);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
        {
          console.log(id);

          
          this.teacherService.deleteTime(id);
        }

          else if(result=='no')
          console.log('thank you ');

      }
    })
  }


}
