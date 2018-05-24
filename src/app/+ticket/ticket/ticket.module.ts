import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ticketRoutes} from './ticket.routing';
import {AddEditTicketComponent} from '../add-edit-ticket/add-edit-ticket.component';
import {ViewTicketComponent} from '../view-ticket/view-ticket.component';
import {SearchTicketComponent} from '../search-ticket/search-ticket.component';
import {TicketOverviewComponent} from '../ticket-overview/ticket-overview.component';
import {SharedModule} from '../../modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ticketRoutes)
  ],
  declarations: [
    AddEditTicketComponent,
    ViewTicketComponent,
    SearchTicketComponent,
    TicketOverviewComponent
  ]
})
export class TicketModule { }
