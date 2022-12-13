import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { HomeService } from 'src/app/Services/home.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  
  createForm : FormGroup = new FormGroup({
    user_Id : new FormControl(),
    text : new FormControl('')
  });
  constructor(public studentService:StudentService,public authService:AuthService) { }
 
  ngOnInit(): void {
    
  }
  SaveData(){
    debugger
    this.createForm.controls['user_Id'].setValue(Number(this.authService.data.ID));
    console.log(this.createForm.value);
    this.studentService.CreateTestimonial(this.createForm.value);
    
  }
  
  
}
