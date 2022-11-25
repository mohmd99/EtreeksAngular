import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../Services/general.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public generalService:GeneralService) { }

  ngOnInit(): void {
    this.generalService.getabout();
  }

}
