import { Routes } from '@angular/router';
import { TodoList } from '@app/todoList/list.component';
import { Home } from '@app/home/index.component';
import { Login } from '@app/login/index.component';
import { UserInformation } from '@app/userInformation/index.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'todo', component: TodoList },
  { path: 'user/:id', component: UserInformation },
];
