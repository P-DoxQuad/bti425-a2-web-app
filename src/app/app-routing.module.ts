import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { ContactComponent } from "./contact.component";
import { ListAllTermsComponent } from './list-all-terms.component';
import { AddTermComponent } from './add-term.component';
import { ViewTermComponent } from './view-term.component';
import { EditTermComponent } from './edit-term.component';
import { AddDefinitionComponent } from './edit-definition.component';
import { DeleteTermComponent } from './delete-term.component';
import { NotfoundComponent } from "./notfound.component";



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: ListAllTermsComponent },
  { path: 'terms/add', component: AddTermComponent},
  { path: 'term/english/details/:id', component: ViewTermComponent},
  { path: 'term/english/edit/:id', component: EditTermComponent},
  { path: 'term/english/edit/definition/:id', component: AddDefinitionComponent},
  { path: 'term/english/delete/:id', component: DeleteTermComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
