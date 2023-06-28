import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signUpForm: FormGroup;
  onSubmit() {
    console.log(this.signUpForm)
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'password': new FormControl(null, Validators.required),
      'gmail': new FormControl(null, [Validators.required, Validators.email]),
    });
  }
}
