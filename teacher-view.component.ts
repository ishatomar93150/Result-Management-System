import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ResultService } from '../result.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {

  constructor(private result: ResultService, private router: Router) { }

  r: any
  collection: any = [];
  ngOnInit(): void {
    if (localStorage.getItem("logged") == "false") {
      this.router.navigate(['/teacher-login']);
    }
    this.result.getList().subscribe((result) => {
      console.warn(result)
      this.r = result
      this.collection = this.r["data"]
    })
  }

  delete(rollno: any) {
    this.result.delete(rollno).subscribe((result) => {
      window.location.reload()
    })
  }
   logout() {
    localStorage.setItem("logged", "false")
    this.router.navigate(['/teacher-login']);
  }
}