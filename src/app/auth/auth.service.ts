import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Subject } from "rxjs";
import { User } from "./user.model";

interface AuthResponse  {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: number;
  localId: string;
}


@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new Subject<User>();

  signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDDRy1kVUHMb0he2GTzmWDvpeg1pfKLBcM';
  signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDDRy1kVUHMb0he2GTzmWDvpeg1pfKLBcM';

  constructor(private http: HttpClient) {
  }

  handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expireDate);
    this.user.next(user);
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponse>(this.signUpUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

  signin(email: string, password: string) {
    return this.http.post<AuthResponse>(this.signInUrl, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
