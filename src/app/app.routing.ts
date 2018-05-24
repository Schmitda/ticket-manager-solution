import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const Routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'ticket',
    loadChildren: './+ticket/ticket/ticket.module#TicketModule'
  },
  {
    path: 'user',
    loadChildren: './+user/user/user.module#UserModule'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


// gegeben sei eine Appliaktion
// Tickets / Users / Adressen / Firmen
//

/**
 * /ticket/view/:id  --> Zeigt ein Element an
 * /ticket/add/ --> Zeigt ein Creator Form an
 * /ticket/edit/:id --> Zeigt ein Edit-Formular an
 * /ticket/ --> Zeigt alle Tickets an
 *
 * Wir würden vier Module erstellen
 * ticket.module.ts --> RouterModule.forChild()
 * user.module.ts --> RouterModule.forChild()
 * adress.module.ts --> RouterModule.forChild()
 * company.module.ts --> RouterModule.forChild()
 *
 *
 *
 *
 * @type {ModuleWithProviders}
 */
//
//
//


export const myRoutes = RouterModule.forRoot(Routes);
