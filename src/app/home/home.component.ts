import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GeneralService } from '../Services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public generalServise:GeneralService) { }

  ngOnInit(): void {
    this.generalServise.GetHomeInfo();


    
    // setTimeout(() => {

    //   this.spinner.hide();
    //   }, 3000);

  }

}
