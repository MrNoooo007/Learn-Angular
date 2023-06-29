import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{
  isLoginMode = false;
  signUpForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  changeMode() {
    this.isLoginMode = !this.isLoginMode;
    console.log(this.signUpForm)
  }

  onSubmit(form: FormGroup) {
    if(!form.valid) return;
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if(this.isLoginMode) {

    }
    else {
      this.authService.signup(email, password).subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
        }
      );
      this.isLoading = false;
      this.signUpForm.reset();
    }
  }
}
