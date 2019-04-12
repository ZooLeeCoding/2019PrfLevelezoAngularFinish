import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitComponent } from './fruit/fruit.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // ha nincs konkrét path, irányítsuk át a usert a login felületre
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'fruit', component: FruitComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},

  // a wildcard mindig legyen utolso
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
