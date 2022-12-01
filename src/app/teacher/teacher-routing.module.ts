import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';

const routes: Routes = [{
  path:'home',
  component:HomeComponent
},
{
  path:'updateprofile',
  component:ProfileTeacherComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
