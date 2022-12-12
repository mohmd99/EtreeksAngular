import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { GeneralService } from 'src/app/Services/general.service';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(public authService:AuthService,private router:Router ,public adminService:AdminService,public generalService:GeneralService) { }


  ngOnInit(): void {
    this.adminService.getuserbyid(this.authService.data.ID);
    this.adminService.getloginuserbyid(this.authService.data.ID);
    this.authService.getalllogin();
    this.generalService.GetAllCourses();
  }


  myName:string=this.adminService.userbyid.first_Name;


  OpenCourses(){


    this.router.navigate(['AllCourses']);

  }



  canvas: any;
  ctx: any;
  @ViewChild('pieCanvasTrainer') pieCanvasTrainer!: { nativeElement: any };
  @ViewChild('barCanvasCourseTrainer') barCanvasCourseTrainer!: { nativeElement: any };

  pieChart: any;
  barCanvas: any;

  ngAfterViewInit(): void {
    this.pieChartBrowser();
    this.barChartMethod();
  }

  pieChartBrowser(): void {
    this.canvas = this.pieCanvasTrainer.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ['Apple', 'Google', 'Facebook', 'Infosys', 'Hp', 'Accenture'],
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#95a5a6',
              '#9b59b6',
              '#f1c40f',
              '#e74c3c',
            ],
            data: [12, 19, 3, 17, 28, 24],
          },
        ],
      },
    });
  }

  barChartMethod() {
    this.barCanvas = new Chart(this.barCanvasCourseTrainer?.nativeElement, {
      type: 'bar',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [
          {
            label: '# of Votes',
            data: [200, 50, 30, 15, 20, 34],
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