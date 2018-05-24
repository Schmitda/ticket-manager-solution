import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserInterface} from '../types/UserInterface';
import {HttpClient} from '@angular/common/http';
import {UserStatService} from './user-stat.service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private userState: UserStatService) {
  }

  public save(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>('/api/user', user);
  }

  public getAll(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('/api/user');
  }

  public getById(_id: string) {
    return this.http.get<UserInterface>('/api/user/' + _id);
  }

  delete(_id: string) {
    // api/user/8asjkm2234782as
    return this.http.delete('/api/user/' + _id);
  }

  update(user: UserInterface) {
    return this.http.put('/api/user/' + user._id, user);
  }

  public checkToken() {
    return this.http.post<{ user: UserInterface, token: string }>('/api/user/checkToken', {token: localStorage.getItem('token')})
      .do((val) => {
        this.userState.setUser(val.user);
        this.userState.setToken(val.token);
      });
  }

  login(email: string, password: string) {
    return this.http.post<{ user: UserInterface, token: string }>('/api/user/login', {email: email, password: password})
    // DO wird gebraucht, wenn immer eine gewisse Aktivität nach einem Subscribe durchgeführt werden soll.
    // Das returned Objekt bleibt ein Observable
      .do((val) => {
        this.userState.setUser(val.user);
        this.userState.setToken(val.token);
      });
  }
}
