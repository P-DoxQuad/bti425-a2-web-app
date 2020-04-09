import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { ContactComponent } from "./contact.component";
import { ListAllTermsComponent } from './list-all-terms.component';
import { AddTermComponent } from './add-term.component';
import { ViewTermComponent } from './view-term.component';
import { EditTermComponent } from './edit-term.component';
import { NotfoundComponent } from "./notfound.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: ListAllTermsComponent },
  { path: 'add-new', component: AddTermComponent},
  { path: 'details', component: ViewTermComponent},
  { path: 'edit', component: EditTermComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
