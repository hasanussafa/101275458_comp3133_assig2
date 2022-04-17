import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[]
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder, private databaseService: DatabaseService, private router: Router) {
    this.signUpForm = this.fb.group({  
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      type: ['customer', [Validators.required]],
    });
  }

  submited = false;
  onSubmit() {
    this.submited = true;
    if(this.signUpForm.valid) {
      this.databaseService.signUp(this.signUpForm.value).subscribe(data => {
        console.log(data)
        if(data.data) {
          this.router.navigate(['/login'])// go to login page
        } else {
          alert("Error")
        }
      });
    } else {
      alert("Sorry. Please check your input.")
    }
  }

  
  ngOnInit(): void {
  }

}
