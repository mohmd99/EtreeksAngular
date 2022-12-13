import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from '../Services/general.service';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  @ViewChild('CreateDialoug') callCreate!:TemplateRef<any>;
  createForm : FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    Text : new FormControl('' ,Validators.required)
  });
  constructor(private generalService:GeneralService,public homeService:HomeService) { }
 
  ngOnInit(): void {
    
  }
  SaveData(){
    console.log(this.createForm.value);
    this.generalService.CreateTestimonial(this.createForm.value);
    
  }
  
  
}
