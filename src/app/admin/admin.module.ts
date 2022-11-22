import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminPanelComponent,
    ManageCoursesComponent,
    SideNavComponent,
    AdminNavbarComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
