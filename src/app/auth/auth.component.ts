import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{
  isLoginMode = false;
  signUpForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {
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
      this.authService.signin(email,password).subscribe(
        data => {
          this.authService.handleAuthentication(data.email, data.localId, data.idToken, data.expiresIn);
        }
      )
      this.isLoading = false;
      this.router.navigate(['/recipes'])
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
      this.router.navigate(['/recipes'])
    }
  }
}
