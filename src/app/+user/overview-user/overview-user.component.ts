import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserInterface} from '../../types/UserInterface';
import {MessageService} from '../../messages/services/message.service';

@Component({
  selector: 'ticket-overview-user',
  templateUrl: './overview-user.component.html',
  styleUrls: ['./overview-user.component.css']
})
export class OverviewUserComponent implements OnInit {
  public users: UserInterface[];

  public deleteUser(user: UserInterface) {
    this.userService.delete(user._id).subscribe((val) => {
      this.loadAll();
    });
  }

  public loadAll() {
    this.userService.getAll().subscribe((val) => {
      this.users = val;
    });
  }

  constructor(private userService: UserService, private messageService: MessageService) {
    this.loadAll();
  }

  ngOnInit() {
  }

}
