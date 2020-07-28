import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  createUser(email: string, password: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  loginUser(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
  }
  logOut() {
    return this.angularFireAuth.auth.signOut();
  }

  hasUser() {
    return this.angularFireAuth.authState;
  }
  loginRestAPI(email: string, password: string) {
    return this.http
      .post('https://platzi-store.herokuapp.com/auth', {
        email,
        password,
      })
      .pipe(
        tap((data: { token: string }) => {
          const token = data.token;
          this.tokenService.saveToken(token);
        })
      );
  }
}
