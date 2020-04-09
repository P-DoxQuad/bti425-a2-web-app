import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { ListAllTermsComponent } from './list-all-terms.component';
import { AddTermComponent } from './add-term.component';
import { ViewTermComponent } from './view-term.component';
import { EditTermComponent } from './edit-term.component';
import { NotfoundComponent } from './notfound.component';
import { NavMainComponent } from './nav-main.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ListAllTermsComponent,
    AddTermComponent,
    ViewTermComponent,
    EditTermComponent,
    NotfoundComponent,
    NavMainComponent



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
