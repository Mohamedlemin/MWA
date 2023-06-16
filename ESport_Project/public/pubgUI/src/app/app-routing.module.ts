import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegionsComponent } from './regions/regions.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: 'dash', component: DashbordComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
