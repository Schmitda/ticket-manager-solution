import {UserInterface} from './UserInterface';

export interface TicketInterface {
  _id?: string;
  subject: string;
  body: string;
  created: Date;
  owner: UserInterface;
  urgent: boolean;
  type: string;
}
