import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

//ResultService encapsulates the logic for making HTTP requests to interact with the backend server
//Decorator that marks a class as available to be provided and injected as a dependency.
@Injectable({
  providedIn: 'root'
})
export class ResultService {
 
  url="http://localhost:4300/"



  dob: string ="";

  id: string="";

  constructor(private http:HttpClient) { }
 
  //List 
  getList()
  {
    return this.http.get(this.url+"teacher-view");
  }

  //Student Result
  getresult(rollno: any)
  {
    return this.http.get(this.url+"viewresult/"+rollno);
  }

  //Teacher Login
  getTeacher(data: any)
  {
    return this.http.post(this.url+"teacher-login",data);
  }

  //Student Login
  getStudent(data: any)
  {
    return this.http.post(this.url+"student-login",data);
  }


  //Add Student
  getAddRecord(data: any)
  {
    return this.http.post(this.url+"add-record",data);
  }

  //Update
  getedit(data :any)
  {
    return this.http.post(this.url+"edit",data);
  }

  //Delete
  delete(rollno: any)
  {
    return this.http.get(this.url+"delete/"+rollno);
  }
}