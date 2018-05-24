import {Routes} from '@angular/router';
import {AddEditUserComponent} from '../add-edit-user/add-edit-user.component';
import {ViewUserComponent} from '../view-user/view-user.component';
import {OverviewUserComponent} from '../overview-user/overview-user.component';

export const userRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddEditUserComponent
  },
  {
    path: 'edit/:id',
    component: AddEditUserComponent
  },
  {
    path: 'list',
    component: OverviewUserComponent
  },
  {
    path: 'view/:id',
    component: ViewUserComponent
  }
];
