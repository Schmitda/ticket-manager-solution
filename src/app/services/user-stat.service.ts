import {Injectable} from '@angular/core';
import {UserInterface} from '../types/UserInterface';

@Injectable()
export class UserStatService {
  private _isLoggedIn: boolean = false;
  private user: UserInterface;

  constructor() {
  }

  setUser(user: UserInterface) {
    this._isLoggedIn = true;
    this.user = user;
  }


  public hasToken():boolean{
    return !!localStorage.getItem('token');
  }


  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

}
