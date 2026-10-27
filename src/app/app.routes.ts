import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ConferanceList } from './conferance-list/conferance-list';
import { NotFound } from './not-found/not-found';
import { ConferanceDetails } from './conferance-details/conferance-details';
import { UserForm } from './user-form/user-form';
import { AddConferance } from './add-conferance/add-conferance';
import { UpdateConferance } from './update-conferance/update-conferance';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'list', component: ConferanceList },
  { path: 'details/:id', component: ConferanceDetails },
  { path: 'add-conferance', component: AddConferance },
  { path: 'update/:id', component: UpdateConferance },
  { path: 'add', component: UserForm },
  { path: '**', component: NotFound },
];
