import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: AngularFireAuth) { }
  
  initSesion(email: string, pass: string)
  {
    return this.auth.signInWithEmailAndPassword(email, pass);
  }
}
