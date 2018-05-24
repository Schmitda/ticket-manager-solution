import {Component, Injector, OnInit} from '@angular/core';
import {UserStatService} from '../services/user-stat.service';
import {StaticInjector} from '../../StaticInjector';


export class BaseComponent implements OnInit {
  private userState: UserStatService;

  constructor() {
    this.userState = StaticInjector.getInjector().get(UserStatService);
  }

  ngOnInit() {
  }
}
