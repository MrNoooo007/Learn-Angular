import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth-service";
import {interval} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    // interval(1000).subscribe(function(){
    //   console.log("hello")
    // })
  }

  loadServer() {
    this.router.navigate(['/server']);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
