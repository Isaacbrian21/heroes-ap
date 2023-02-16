import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './modules/hero-detail/hero-detail.componente';
import { HeroesComponent } from './modules/heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from './core/components/messages/messages.component'
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MaterialModule } from './core/material-module/material.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
