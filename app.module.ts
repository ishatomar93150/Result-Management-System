import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { ViewresultComponent } from './viewresult/viewresult.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// It is the decorator used to configure an Angular module.
@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    EditComponent,
    HomeComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    TeacherViewComponent,
    ViewresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
