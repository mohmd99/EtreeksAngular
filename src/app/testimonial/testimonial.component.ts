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
  unvisible=false;
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
    this.unvisible=false;
  }
  loook:any;
  location:any={};
  contact:any;
  googlemapSource = "https://www.google.com/maps/embed/v1/place?&q=";

  ContactLocation(item:any){
    this.contact=item;
    let lctn= item.location;
    console.log("location");
    console.log(this.location);
    

    this.googlemapSource+=lctn.lat.toString();
    this.googlemapSource+=",";
    this.googlemapSource+=lctn.lng.toString();
    this.googlemapSource+="&zoom=12&key=AIzaSyAVn6ea2iJcMq9Wp0pKGlr3RpA8SVK1MCM&maptype=roadmap";
    console.log( this.googlemapSource);
    console.log("location");
    console.log(this.location);
  }
}
