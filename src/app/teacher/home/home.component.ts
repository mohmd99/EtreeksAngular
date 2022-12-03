import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:any="";
  @Input() first_Name:string="";
  @Input() last_Name:string="";
  @Input() image:string|undefined;
  @Input() color:string="";
  constructor(public teacherService:TeacherService,public authService:AuthService ,private router:Router,public generalService:GeneralService) { }

  ngOnInit(): void { 
    this.generalService.GetHomeInfo();
    this.teacherService.getuserbyid(this.authService.data.ID);
    this.teacherService.getloginuserbyid(this.authService.data.ID);
  }
  myName:string=this.teacherService.userbyid.first_Name;
  Colors:any[]=[
    "#8B7E74",
  "#344D67",
  "#8B7E74",
  "#C7BCA1",
  "#497174",
  "#3A8891",
  "#6D9886",
  "#8D9EFF",
  "#9BA17B",
  "#5DA7DB",
  "#9E7676",
  "#98A8F8",
  "#251B37",
  "#1C6758",
  "#704F4F",
  "#FF731D",
  "#AC4425",
  "#A10035",
  "#D1512D",
  "#18978F",
  "#B20600",
  "#00092C",
  "#D9534F",
  "#8A8635",
  "#630000",
  "#334756",
  "#6C4A4A",
  "#105652",
  "#694E4E"
    ]
    default={
      color:this.Colors[this.first_Name.toUpperCase().charCodeAt(0)-97],
  
    }
  
    
}
