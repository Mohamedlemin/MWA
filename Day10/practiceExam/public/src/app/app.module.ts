import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobformComponent } from './jobform/jobform.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, JobsComponent, JobDetailsComponent, JobformComponent],
  imports: [BrowserModule, AppRoutingModule,
     HttpClientModule,FormsModule,
     NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
