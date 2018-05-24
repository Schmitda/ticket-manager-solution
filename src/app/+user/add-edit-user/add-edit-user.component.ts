import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MessageService} from '../../messages/services/message.service';

@Component({
  selector: 'ticket-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute, private messageService: MessageService) {
    this.userForm = this.fb.group(
      {
        _id: [],
        firstname: [, Validators.required],
        lastname: [, Validators.required],
        phone: [, Validators.required],
        age: [, [Validators.min(18), Validators.max(150)]],
        email: [, Validators.required],
        password: [, [Validators.required, Validators.minLength(7)]],
      }
    );
    this.route.params.subscribe((param: Params) => {
      if (param['id']) {
        this.userService.getById(param['id']).subscribe((val) => {
          this.userForm.patchValue(val);
        });
      }
    });
  }

  public saveUser() {
    if (this.userForm.valid) {
      if (this.userForm.value._id) {
        this.userService.update(this.userForm.value).subscribe((val) => {
          this.messageService.setMessage('Erfolg', 'Benutzer wurde erfolgreich bearbeitet');
          this.router.navigateByUrl('/user');
        });
      } else {
        this.userService.save(this.userForm.value).subscribe((val) => {
          this.messageService.setMessage('Erfolg', 'Benutzer wurde erfolgreich erstellt');
          this.router.navigateByUrl('/user');
        });
      }
    }
  }

  ngOnInit() {
  }

}
