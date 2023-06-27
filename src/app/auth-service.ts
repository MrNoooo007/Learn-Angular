import {Injectable} from "@angular/core";

export class AuthService {
  loggedIn = false;

  login() {
    console.log("logging !!!")
    this.loggedIn = true;
  }

  logout() {
    console.log("log out !!!")
    this.loggedIn = false;
  }

  isAuthenticated() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800)
      }
    );
  }
}
