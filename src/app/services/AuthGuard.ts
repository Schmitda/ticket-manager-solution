import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserStatService} from './user-stat.service';
import {UserService} from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      if (this.userState.isLoggedIn) {
        resolve(true);
      } else if (this.userState.hasToken()) {
        this.userService.checkToken().subscribe(() => {
          if (this.userState.isLoggedIn) {
            resolve(true);
          } else {
            resolve(false);
          }
        }, () => {
          resolve(false);
        });
      } else {
        resolve(false);
      }
    });
  }

  constructor(private userState: UserStatService, private userService: UserService) {
  }

}
