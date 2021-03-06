import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fireStore: AngularFirestore) { }
  readonly collectionName = 'usuarios';
  GetUsuarios()
  {
    return this.fireStore.collection(this.collectionName).snapshotChanges();
  }
}
