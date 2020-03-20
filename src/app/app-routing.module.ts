import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddartComponent } from './addart/addart.component';
import { ArtdetailComponent } from './artdetail/artdetail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard/guard.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',canActivate: [GuardGuard], component: HomeComponent },
  { path: 'add', canActivate: [GuardGuard],component: AddartComponent },
  { path: 'detail/:id', component: ArtdetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
