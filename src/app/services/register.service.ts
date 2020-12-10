import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private storage: Storage) {}

  public async save(key: string, username: string) {
    await this.storage.set(key, username);
  }

  public async get(key: string, otherKey: string) {
    var currentUser: string;
    var currentPassword: string;

    await this.storage.get(key).then((val) => {
      currentUser = val;
    });
    await this.storage.get(otherKey).then((val) => {
      currentPassword = val;
    });

    return { currentUser, currentPassword };
  }
}

export interface User {
  username: string;
  password: string;
}
