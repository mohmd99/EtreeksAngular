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
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { MessageComponent } from './message/message.component';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ManageTrainerComponent } from './manage-trainer/manage-trainer.component';
import { ManageContactInfoComponent } from './manage-contact-info/manage-contact-info.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    ManageCoursesComponent,
    SideNavComponent,
    AdminNavbarComponent,
    ManageCategoryComponent,
    ManageHomeComponent,
    MessageComponent,
    ManageAboutComponent,
    ManageTestimonialComponent,
    ManageUserComponent,
    ManageProfileComponent,
    ManageTrainerComponent,
    ManageContactInfoComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    GoogleMapsModule
  ],
  exports: [
    AdminNavbarComponent
  ]
})
export class AdminModule { }
