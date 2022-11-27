import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-contact-student',
  templateUrl: './contact-student.component.html',
  styleUrls: ['./contact-student.component.css']
})
export class ContactStudentComponent implements OnInit {
  @ViewChild('CreateDialoug') callCreate!:TemplateRef<any>;
  unvisible=false;
  createForm : FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    message : new FormControl('' ,Validators.required)
  });
  constructor(public homeService:HomeService , public adminService:AdminService) { }

  ngOnInit(): void {
  }
  SaveData(){
    console.log(this.createForm.value);
    this.homeService.CreateContactUs(this.createForm.value);
    this.unvisible=false;
  }
}
