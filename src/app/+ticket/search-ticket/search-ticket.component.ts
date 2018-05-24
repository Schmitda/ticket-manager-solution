import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TicketService} from '../../services/ticket.service';
import 'rxjs/Rx';
import {TicketInterface} from '../../types/TicketInterface';

// import 'rxjs/operator/debounceTime'


@Component({
  selector: 'ticket-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.css']
})
export class SearchTicketComponent implements OnInit {
  @Output() searchResultsChanged: EventEmitter<{ tickets: TicketInterface[], searchTerm: string }> = new EventEmitter<{ tickets: TicketInterface[], searchTerm: string }>();
  public searchTicketControl: FormControl;

  constructor(private ticketService: TicketService) {
    this.searchTicketControl = new FormControl();
    console.log(this.searchTicketControl.valueChanges);
    this.searchTicketControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((val) => {
        if (val) {
          this.ticketService.search(val).subscribe((searchResults) => {
            this.searchResultsChanged.emit({tickets: searchResults, searchTerm: val});
          });
        } else {
          this.searchResultsChanged.emit({tickets: null, searchTerm: val});
        }
      });
  }

  ngOnInit() {

  }

}
