import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fireStore: AngularFirestore) { }
  readonly collectionName = 'usuarios';
  Get()
  {
    return this.fireStore.collection(this.collectionName).snapshotChanges();
  }
}
