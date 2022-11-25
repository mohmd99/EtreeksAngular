import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('CreateDialoug') callCreate!:TemplateRef<any>;
  unvisible=false;
  createForm : FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    message : new FormControl('' ,Validators.required)
  });
  constructor(public homeService:HomeService) { }
 
  ngOnInit(): void {
  }
  SaveData(){
    console.log(this.createForm.value);
    this.homeService.CreateContactUs(this.createForm.value);
    this.unvisible=false;
  }

}
