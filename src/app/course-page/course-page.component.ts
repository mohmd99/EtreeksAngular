import { StudentService } from 'src/app/Services/student.service';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GeneralService } from '../Services/general.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import nextDay from 'date-fns/nextDay';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  @ViewChild('CreateReservationDialoug') callCreateReservation!:TemplateRef<any>;

  createForm:FormGroup=new FormGroup
  ({
    trainer_Id:new FormControl(),
    start_Date:new FormControl('',Validators.required),
    end_Date:new FormControl('',Validators.required)
    
  });


  constructor(public dialog:MatDialog, public generalServise:GeneralService,public studentService:StudentService ) { }

  ngOnInit(): void {
    
   
  }

  // temp="{\"lat\":32.0453809970146,\"lng\":36.10676384863419}";
  loook:any;
  location:any={};
  trainer:any;
   googlemapSource = "https://www.google.com/maps/embed/v1/place?&q=";

  OpenCreateDialouge(item:any)
  {
    this.trainer=item;
    console.log(item.location) 
    let lctn= JSON.parse(item.location); 
    console.log(lctn); 
    this.location=lctn;
    
    this.googlemapSource+=lctn.lat.toString();
    this.googlemapSource+=",";
    this.googlemapSource+=lctn.lng.toString();
    this.googlemapSource+="&zoom=12&key=AIzaSyAVn6ea2iJcMq9Wp0pKGlr3RpA8SVK1MCM&maptype=roadmap";
    console.log( this.googlemapSource); 
    this.dialog.open(this.callCreateReservation);
    this.loook="https://www.google.com/maps/embed/v1/place?&q="+this.location.lat+","+this.location.lng+"&zoom=12&key=AIzaSyAVn6ea2iJcMq9Wp0pKGlr3RpA8SVK1MCM&maptype=roadmap"; 

    //console.log(this.createForm.value)

  }

  SaveData(){


  
   }


}
