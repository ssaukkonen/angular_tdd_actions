import { NgModule } from '@angular/core';
import { BrowserModule, Title, bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// bootstrapApplication(AppComponent);
@NgModule({
  // declarations: [
  //   AppComponent,
  // ],
  imports: [
    BrowserModule,
    HomeComponent,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppComponent
  ],
  providers: [Title],
  // bootstrap: [AppComponent]
})
export class AppModule { }
