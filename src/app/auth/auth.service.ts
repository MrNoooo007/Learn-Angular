import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

interface AuthResponse  {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}


@Injectable({ providedIn: 'root' })
export class AuthService {
  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDDRy1kVUHMb0he2GTzmWDvpeg1pfKLBcM';

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponse>(this.url, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
