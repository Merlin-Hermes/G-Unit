import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './page/home/home.component';
import {LoginComponent} from './page/login/login.component';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LayoutComponent, children: [
    {path: 'home', component: HomeComponent}, ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
