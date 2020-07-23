import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

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
}
