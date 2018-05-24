import {Component, Injector} from '@angular/core';
import {StaticInjector} from '../StaticInjector';
import {TicketService} from './services/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private injector: Injector) {
    StaticInjector.setInjector(injector);
    window['staticInjector'] = this.injector;
    window['ticketService'] = this.injector.get(TicketService);
  }
}
