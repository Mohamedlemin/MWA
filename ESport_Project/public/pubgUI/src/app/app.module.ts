import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { TeamsComponent } from './teams/teams.component';
import { LoginComponent } from './login/login.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyAuthInterceptor } from './my-auth.interceptor';
import { PmplComponent } from './pmpl/pmpl.component';
import { TeamComponent } from './team/team.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { PmplFormComponent } from './pmpl-form/pmpl-form.component';
import { TemsFormComponent } from './tems-form/tems-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPmplComponent } from './edit-pmpl/edit-pmpl.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashbordComponent,
    NotFoundComponent,
    RegistrationComponent,
    TeamsComponent,
    LoginComponent,
    PmplComponent,
    TeamComponent,
    PmplFormComponent,
    TemsFormComponent,
    EditPmplComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000, 
      positionClass: 'toast-top-right', 
      preventDuplicates: true, // Prevent duplicate toast notifications
    }),
  ],
  providers: [
    JwtHelperService,
    ToastrService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: MyAuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
