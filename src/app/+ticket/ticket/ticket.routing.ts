import {Routes} from '@angular/router';
import {AddEditTicketComponent} from '../add-edit-ticket/add-edit-ticket.component';
import {TicketOverviewComponent} from '../ticket-overview/ticket-overview.component';
import {ViewTicketComponent} from '../view-ticket/view-ticket.component';

export const ticketRoutes: Routes = [
  {
    path: 'add',
    component: AddEditTicketComponent
  },
  {
    path: 'edit/:id',
    component: AddEditTicketComponent
  },
  {
    path: 'list',
    component: TicketOverviewComponent
  },
  {
    path: 'view/:id',
    component: ViewTicketComponent
  }
];
