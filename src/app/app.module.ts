import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LogInComponent } from './shared/components/log-in/log-in.component';
import { StudentFormComponent } from './shared/components/student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogInComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
