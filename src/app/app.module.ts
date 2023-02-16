import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from './core/components/messages/messages.component'

import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HeroesModule } from './modules/heroes/heroes.module';




@NgModule({
  declarations: [
    AppComponent,

    MessagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,

    //feature
    DashboardModule,
    HeroesModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
