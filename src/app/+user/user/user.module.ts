import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {userRoutes} from './user.routing';
import {RouterModule} from '@angular/router';
import {AddEditUserComponent} from '../add-edit-user/add-edit-user.component';
import {ViewUserComponent} from '../view-user/view-user.component';
import {OverviewUserComponent} from '../overview-user/overview-user.component';
import {SharedModule} from '../../modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    AddEditUserComponent,
    ViewUserComponent,
    OverviewUserComponent,
  ]
})
export class UserModule { }
