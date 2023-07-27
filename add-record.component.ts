// includes import statements for various Angular modules and classes
//1.allowing to make API calls from Angular application.
//2.This import statement brings in the Component and OnInit decorators from the @angular/core module.
//3.This import statement brings in several classes related to reactive forms from the @angular/forms module.
//4.This import statement brings in classes and modules related to Angular routing from the @angular/router module.
//5.This import statement brings in the ResultService from the result.service
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { ResultService } from '../result.service';

//Decorator that marks a class as an Angular component and provides configuration metadata,
//that determines how the component should be processed, instantiated, and used at runtime.
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
//OnInit interface, the component can define and execute code that needs to run when the component is initialized.
//Validators.required to make the field required

export class AddRecordComponent implements OnInit {
  addRecord = new FormGroup({
    rollno: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    dob: new FormControl('', Validators.required),
    score: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
  })

  error = false

  get rollno() { return this.addRecord.get('rollno') }
  get name() { return this.addRecord.get('name') }
  get dob() { return this.addRecord.get('dob') }
  get score() { return this.addRecord.get('score') }

//The constructor allows to inject dependencies into the component by specifying the necessary services and other dependencies as constructor parameters.
  constructor(private router: ActivatedRoute, private result: ResultService, private routers: Router) { }

//r: any: This line declares a class property r and assigns the type any to it. 
//The : any type annotation means that r can hold a value of any type.
//ngOnInit(): This is a lifecycle hook method provided by Angular. It is called when the component is initialized. 
  r: any
  ngOnInit(): void {
    if (localStorage.getItem("logged") == "false") {
      this.routers.navigate(['/teacher-login']);
    }
  }
  add() {
//The subscribe function is called on the observable returned by getAddRecord.
// It takes a callback function as an argument
    console.warn(this.addRecord.value)
    this.result.getAddRecord(this.addRecord.value).subscribe((result) => {
      console.log(result)
      this.r = result

      if (this.r["message"]=="Already exist") {
        this.error = true
        console.warn("Already exist")
      }
      else {
        this.routers.navigate(['/teacher-view']);
        console.warn("Added Successfully")
      }
    })
  }
  logout() {
    localStorage.setItem("logged", "false")
    this.routers.navigate(['/teacher-login']);
  }
}