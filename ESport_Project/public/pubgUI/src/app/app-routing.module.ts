import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { TeamsComponent } from './teams/teams.component';
import { PmplComponent } from './pmpl/pmpl.component';

const routes: Routes = [
  { path: 'dash', component: DashbordComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'pmpl', component: PmplComponent },
  { path: 'teams', component: TeamsComponent },
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
