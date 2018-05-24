import {Component, OnInit, ViewChild} from '@angular/core';
import {UserStatService} from '../../services/user-stat.service';
import {BaseComponent} from '../../base-component/base.component';
import {TicketInterface} from '../../types/TicketInterface';
import {TicketService} from '../../services/ticket.service';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserInterface} from '../../types/UserInterface';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'ticket-add-edit-ticket',
  templateUrl: './add-edit-ticket.component.html',
  styleUrls: ['./add-edit-ticket.component.css']
})
export class AddEditTicketComponent extends BaseComponent implements OnInit {
  @ViewChild('ngForm') ngForm: FormGroup;
  public ticket: TicketInterface = <any>{};
  public users: UserInterface[];
  private isEdit: boolean = false;

  constructor(private ticketService: TicketService,
              private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    super();
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.isEdit = true;
        this.ticketService.getById(params['id']).subscribe((val) => {
          console.log(val);
          this.ticket = val;
        });
      }
    });
    this.userService.getAll().subscribe((usersFromServer) => {
      this.users = usersFromServer;
    });
  }

  public submitTicket() {
    if (this.ngForm.valid) {
      if (this.isEdit === false) {
        this.ticketService.save(this.ticket).subscribe((val) => {
          this.router.navigateByUrl('/home');
        });
      } else {
        this.ticketService.update(this.ticket).subscribe((val) => {
          this.router.navigateByUrl('/home');
        });
      }
    }
  }

  ngOnInit() {
  }

}
