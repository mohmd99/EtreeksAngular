import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutStudentComponent } from './about-student/about-student.component';
import { ContactStudentComponent } from './contact-student/contact-student.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';

const routes: Routes = [{
  path:'home',
  component:HomeStudentComponent
},
{
  path:'about',
  component:AboutStudentComponent
},
{
  path:'contact',
  component:ContactStudentComponent
},
{
  path:'profile',
  component:ProfileStudentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
