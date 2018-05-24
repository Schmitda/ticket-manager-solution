import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserInterface} from '../../types/UserInterface';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'ticket-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  public user: UserInterface;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.userService.getById(params['id']).subscribe((val) => {
          this.user = val;
        });
      }
    });
  }

  ngOnInit() {
  }

}
