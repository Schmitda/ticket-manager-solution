import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserInterface} from '../types/UserInterface';
import {UserStatService} from '../services/user-stat.service';

@Component({
  selector: 'ticket-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private userState: UserStatService) {
    this.loginForm = this.fb.group({
      email: [, Validators.required],
      password: [, Validators.required]
    });
  }

  public login() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((val) => {
        "login erfolgreich";

      });
    } else {
      alert('Formular invalid!');
    }
  }

  ngOnInit() {
  }

}
