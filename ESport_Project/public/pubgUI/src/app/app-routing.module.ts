import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { TeamsComponent } from './teams/teams.component';
import { PmplComponent } from './pmpl/pmpl.component';
import { TeamComponent } from './team/team.component';
import { PmplFormComponent } from './pmpl-form/pmpl-form.component';
import { TemsFormComponent } from './tems-form/tems-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'dash', component: DashbordComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'pmpl', component: PmplComponent },
  { path: 'form', component: PmplFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'team-form', component: TemsFormComponent },
  { path: 'team/:pmplId/:teamId', component: TeamComponent },
  {
    path: 'pmpl/:id',
    component: TeamsComponent,
  },
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
