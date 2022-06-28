import { Injectable } from '@angular/core';
import { User } from '@iam/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  Loginin(User_Data: User) {
    localStorage.setItem('USERKEY', '123');
    return true;
  }
  Register(User_Data: User) {
    return true;
  }
  IsLoggedIn() {
    if (localStorage.getItem('USERKEY') !== null)
      return true;
    else
      return false;
  }
  Logout()
  {
    localStorage.removeItem('USERKEY');
  }
}
