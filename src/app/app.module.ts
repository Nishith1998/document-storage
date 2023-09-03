import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/sign-in/sign-in.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './fakeBackend';
import { TokenInterceptor } from './interceoptors/token.interceptor';
import { MaterialModule } from './material/material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    // SignUpComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
