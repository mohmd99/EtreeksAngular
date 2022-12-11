import { StudentService } from 'src/app/Services/student.service';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GeneralService } from '../Services/general.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../Services/teacher.service';
import { AuthService } from '../Services/auth.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  @ViewChild('CreateReservationDialoug') callCreateReservation!:TemplateRef<any>;

  createForm:FormGroup=new FormGroup
  ({
    trainer_Course_Id:new FormControl(),
    user_Id:new FormControl(),
    avaliable_time_id:new FormControl(),

  });


  constructor(private authService:AuthService ,public teacherService:TeacherService,public dialog:MatDialog, public generalServise:GeneralService,public studentService:StudentService ) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.FilteredTrainer=this.studentService.trainersbycourse;


    }, 500);


  }
  Search(ev:any){
    if (ev.target.value!='')
    {
       this.FilteredTrainer=this.FilteredTrainer.filter((x:any)=>x.first_Name.toLowerCase().includes(ev.target.value)|| x.last_Name.toLowerCase().includes(ev.target.value));

    console.log(this.FilteredTrainer);
    }


    else
    this.FilteredTrainer=this.studentService.trainersbycourse;
  }
  available:any;
  book:any;
  check(id:number){
    this.teacherService.getAvailableTimebytrainerId(id);
    this.teacherService.availabletimebytrainerid.forEach((element:any) => {
      if(element.status==null){
        this.available=true;
      }else{
        this.available=false;
        this.book=document.getElementById('book')
        this.book.style.pointerEvents='none';
      }
    });
  }
  FilteredTrainer:any;

  // temp="{\"lat\":32.0453809970146,\"lng\":36.10676384863419}";
  loook:any;
  location:any={};
  trainer:any;
   googlemapSource = "https://www.google.com/maps/embed/v1/place?&q=";

   OpenCreateDialouge(item:any)
  {



    console.log(item.user_Id) ;
     this.studentService.GetAllTimes(item.user_Id);


     console.log(item.location);


    this.trainer=item;

    console.log("location");
    console.log(this.location);

    let lctn= item.location;


    this.googlemapSource+=lctn.lat.toString();
    this.googlemapSource+=",";
    this.googlemapSource+=lctn.lng.toString();
    this.googlemapSource+="&zoom=12&key=AIzaSyAVn6ea2iJcMq9Wp0pKGlr3RpA8SVK1MCM&maptype=roadmap";
    console.log( this.googlemapSource);
   // this.loook="https://www.google.com/maps/embed/v1/place?&q="+this.location.lat+","+this.location.lng+"&zoom=12&key=AIzaSyAVn6ea2iJcMq9Wp0pKGlr3RpA8SVK1MCM&maptype=roadmap";

    //console.log(this.createForm.value)
    console.log(this. studentService.AvailableTimes);

    this.studentService.get_TrainerCourseID(item.id,this.generalServise.retreavedCourse.id);


    this.dialog.open(this.callCreateReservation);

  }

  SaveData(){


    this.createForm.controls['user_Id'].setValue(Number(this.authService.data.ID));
    this.createForm.controls['trainer_Course_Id'].setValue(Number(this.studentService.trainersbycourseID.id));

    console.log(this.createForm.value);
    this.createForm.controls['avaliable_time_id'].setValue(Number( this.createForm.controls['avaliable_time_id'].value))
    this.studentService.createReservation(this.createForm.value);
    this.teacherService.updatestatus(Number( this.createForm.controls['avaliable_time_id'].value),0);


   }


   Filter(ev:any){

    if(ev.target.value=='All')
    this.FilteredTrainer=this.studentService.trainersbycourse;
    else if(ev.target.value=='Amman')
    this.FilteredTrainer=this.studentService.trainersbycourse.filter((x:any)=>
    x.location.lat>=31.78&&x.location.lat<=32.19&&x.location.lng>=35.65&&x.location.lng<=36.01
    );
    else if(ev.target.value=='Irbid')
    this.FilteredTrainer=this.studentService.trainersbycourse.filter((x:any)=>
    x.location.lat>=32.42&&x.location.lat<=32.65&&x.location.lng>=35.63&&x.location.lng<=36.05
    );
    else if(ev.target.value=='Zarqa')
    this.FilteredTrainer=this.studentService.trainersbycourse.filter((x:any)=>
    x.location.lat>=32.0&&x.location.lat<=32.15&&x.location.lng>=36.015&&x.location.lng<=36.16
    );

   }


}
