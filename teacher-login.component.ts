import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ResultService } from '../result.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  teacherLogin = new FormGroup({
    uname: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  })

  error = false
  get uname() { return this.teacherLogin.get('uname') }
  get pass() { return this.teacherLogin.get('pass') }

  constructor(private result: ResultService, private router: Router) { }

  ngOnInit(): void {

  }
  r: any
  teacherlogin() {
    this.result.getTeacher(this.teacherLogin.value).subscribe((result) => {
      console.warn(result)
      this.r = result

      if (this.r["message"] == "valid") {
        localStorage.setItem("logged", "true")
        this.router.navigate(['/teacher-view']);
      }
      else
        this.error = true
    })
  }
}
