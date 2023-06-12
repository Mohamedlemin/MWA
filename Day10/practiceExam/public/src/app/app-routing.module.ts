import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobformComponent } from './jobform/jobform.component';

const routes: Routes = [
  
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'jobs/add',
    component: JobformComponent,
  },
  {
    path: 'jobs/:id',
    component: JobDetailsComponent,
  },
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
   // Redirect the root path to '/jobs'

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
