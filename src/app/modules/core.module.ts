import {NgModule} from '@angular/core';
import {AuthGuard} from '../services/AuthGuard';
import {UserStatService} from '../services/user-stat.service';
import {TicketService} from '../services/ticket.service';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from '../services/user.service';
import {MessageService} from '../messages/services/message.service';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthGuard,
    UserStatService,
    TicketService,
    UserService,
    MessageService
  ],
})

export class CoreModule {
}
