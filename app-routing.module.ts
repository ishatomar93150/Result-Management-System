import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { ViewresultComponent } from './viewresult/viewresult.component';

//Angular routing configuration
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'teacher-login', component:TeacherLoginComponent},
  {path:'teacher-view', component:TeacherViewComponent},
  {path:'student-login', component:StudentLoginComponent},
  {path:'viewresult/:rollno', component:ViewresultComponent},
  {path:'add-record', component:AddRecordComponent},
  {path:'edit/:rollno', component:EditComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
