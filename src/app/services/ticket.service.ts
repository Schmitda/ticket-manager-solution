import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TicketInterface} from '../types/TicketInterface';
import {Observable} from 'rxjs/Observable';
import {ViewTicketComponent} from '../+ticket/view-ticket/view-ticket.component';

@Injectable()
export class TicketService {
  /*public newDataToShow: EventEmitter<TicketInterface> = new EventEmitter<TicketInterface>();*/

  constructor(private http: HttpClient) {
    /*window['ticketService'] = this;*/
  }

  /*public setValueToViewTicketComponent(value: TicketInterface) {
    this.newDataToShow.emit(value);
  }*/

  public search(searchTerm: string): Observable<TicketInterface[]> {
    return this.http.get<TicketInterface[]>('/api/ticket/search/' + searchTerm);
  }

  public save(ticket: TicketInterface): Observable<TicketInterface> {
    ticket.created = new Date();
    return this.http.post<TicketInterface>('/api/ticket', ticket);
  }

  public getAll(): Observable<TicketInterface[]> {
    return this.http.get<TicketInterface[]>('/api/ticket');
  }

  public getById(_id: string) {
    return this.http.get<TicketInterface>('/api/ticket/' + _id);
  }

  delete(_id: string) {
    // api/ticket/8asjkm2234782as
    return this.http.delete('/api/ticket/' + _id);
  }

  update(ticket: TicketInterface) {
    return this.http.put('/api/ticket/' + ticket._id, ticket);
  }
}
