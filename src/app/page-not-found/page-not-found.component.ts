import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ticket-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  public timer: number = 5;
  public interval: number;

  constructor(private router: Router) {
    this.interval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        this.router.navigateByUrl('/home');
        clearInterval(this.interval);
      }
    }, 1000);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
