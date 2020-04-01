import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { ContactComponent } from "./contact.component";
import { TermsComponent } from './terms.component';
import { NotfoundComponent } from "./notfound.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
