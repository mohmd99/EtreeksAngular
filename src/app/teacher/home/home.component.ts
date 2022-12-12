import { AdminService } from './../../Services/admin.service';
import { AdminModule } from './../../admin/admin.module';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';
import { TeacherService } from 'src/app/Services/teacher.service';


import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public adminService:AdminService,public teacherService:TeacherService,public authService:AuthService ,private router:Router,public generalService:GeneralService) { }

  
  ngOnInit(): void {

    debugger
    
    console.log(this.authService.data.ID);
    this.adminService.getuserbyid(this.authService.data.ID);
    this.teacherService.getuserbyid(this.authService.data.ID);
    this.teacherService.getloginuserbyid(this.authService.data.ID);
    this.teacherService.getTraineruserbyid(this.authService.data.ID);
    
    setTimeout(() => {
      console.log("Trainer ID Is :");
      console.log(this.teacherService.Traineruserbyid[0].id);
     
      this.teacherService.getReservationRequest(this.teacherService.Traineruserbyid[0].id);
    

      this.teacherService.getNumberOfStudentssInCoursesByID(this.teacherService.Traineruserbyid[0].id);
      
    }, 800);
  
    
  }




  
  canvas: any;
  ctx: any;
  @ViewChild('pieCanvasTrainer') pieCanvasTrainer!: { nativeElement: any };
  @ViewChild('barCanvasCourseStudent') barCanvasCourseStudent!: { nativeElement: any };

  pieChart: any;
  barCanvas: any;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.pieChartBrowser();
          this.barChartMethod();
          }, 1200);
      
    
  }

  pieChartBrowser(): void {

    console.log(this.teacherService.reservationRequest);
    
    
    this.canvas = this.pieCanvasTrainer.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ['Accepted', 'Pending', 'Rejected'],
        datasets: [
          {
            backgroundColor: [
              '#04d65da6',
              '#f3c3018f',
              '#ff000085','#e74c3c'
            ],
            data: [this.teacherService.reservationRequest.filter((x:any)=>x.status==1).length,this.teacherService.reservationRequest.filter((x:any)=>x.status==null).length,this.teacherService.reservationRequest.filter((x:any)=>x.status==0).length],
          },
        ],
      },
    });
  }

  
  barChartMethod() {
  let coursenames=new Array<string>;
    let numberofstudent =new Array<number>;
    this.teacherService.NumberOfStudentssInCoursesByID.forEach((element:any) => {
      coursenames.push(element.coursE_NAME)
          
    });
    
    this.teacherService.NumberOfStudentssInCoursesByID.forEach((element:any) => {
      numberofstudent.push(element.numberofuser)
          
    });

    console.log(coursenames);
    console.log(numberofstudent);
    
    this.barCanvas = new Chart(this.barCanvasCourseStudent?.nativeElement, {
      type: 'bar',
      data: {
        
        labels:coursenames,
        datasets: [
          {
            label: '# of Votes',
            data:numberofstudent,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  



}
