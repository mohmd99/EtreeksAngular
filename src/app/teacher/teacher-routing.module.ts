import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';
import { ContactTeacherComponent } from './contact-teacher/contact-teacher.component';
import { HomeComponent } from './home/home.component';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';

const routes: Routes = [{
  path:'home',
  component:HomeComponent
},
{
  path:'updateprofile',
  component:ProfileTeacherComponent
},
{
  path:'contact',
  component:ContactTeacherComponent
},
{
  path:'about',
  component:AboutTeacherComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
