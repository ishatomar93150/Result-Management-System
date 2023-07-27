import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResultService } from '../result.service';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.css']
})


export class ViewresultComponent implements OnInit {

//creates a new instance of FormGroup called viewResult. Inside the FormGroup constructor,
// there is an object that defines the form controls using the FormControl class.
  viewResult = new FormGroup({
    rollno: new FormControl(''),
    name: new FormControl(''),
    dob: new FormControl(''),
    score: new FormControl('')

  })


  get rollno() { return this.viewResult.get('rollno') }
  get name() { return this.viewResult.get('name') }
  get dob() { return this.viewResult.get('dob') }
  get score() { return this.viewResult.get('score') }

  constructor(private router: ActivatedRoute, private result: ResultService,private route:Router) { }

  r: any
  ngOnInit(): void {
    if(localStorage.getItem("logged")=="false"){
      this.route.navigate(['/student-login']);
    }
    
/*this.router: It refers to an instance of the Angular Router service, which provides access to the router functionalities.

snapshot: The snapshot property of the Router service represents the current state of the router.
It contains information about the current activated route.*/

    console.warn(this.router.snapshot.params['rollno'])
    this.result.getresult(this.router.snapshot.params['rollno']).
      subscribe((result) => {

        this.r = result
        console.warn(this.r.data)
        this.viewResult = new FormGroup({
          rollno: new FormControl(this.r.data[0].rollno),
          name: new FormControl(this.r.data[0].name),
          dob: new FormControl(this.r.data[0].dob),
          score: new FormControl(this.r.data[0].score)

          
        })
        localStorage.setItem("logged","false")

      }


      )
  }

}