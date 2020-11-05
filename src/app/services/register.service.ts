import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private storage: Storage) {}

  public save(key: string, username: string) {
    this.storage.set(key, username);
  }

  public get(key: string, otherKey: string) {
     this.storage.get(key).then((val) => {
      console.log('Your username is', val);
    });
    this.storage.get(otherKey).then((val) => {
      console.log('Your password is', val);
    });
  }
}

export interface User {
  username: string;
  password: string;
}
