import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegionsComponent } from './regions/regions.component';
import { TeamsComponent } from './teams/teams.component';
import { LoginComponent } from './login/login.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyAuthInterceptor } from './my-auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashbordComponent,
    NotFoundComponent,
    RegistrationComponent,
    RegionsComponent,
    TeamsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    JwtHelperService,
    {provide:JWT_OPTIONS,useValue:JWT_OPTIONS},
    {provide:HTTP_INTERCEPTORS,useClass:MyAuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
