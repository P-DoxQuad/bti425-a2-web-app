import { Component, OnInit } from '@angular/core';
import { Compiler } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataManagerService } from './data-manager.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { AddDefinition, Definition, TermEnglish } from "./data-class";
import { from } from 'rxjs';

@Component({
  selector: 'app-add-definition',
  templateUrl: './edit-definition.component.html',
  styleUrls: ['./edit-definition.component.css']
})
export class AddDefinitionComponent implements OnInit {

  // Data-holding properties
  term: TermEnglish;
  newDef: AddDefinition;
  newDefResult:  Definition;
  //newDefinition: Definition;
  currentDate = new Date;


  constructor(private manager: DataManagerService, private router: Router, private route: ActivatedRoute, private _compiler: Compiler) {

    // Define the user objects
    this.term = new TermEnglish();
    this.newDef = new AddDefinition();
    this.newDefResult = new Definition();
    this.newDef = {
          authorName: null,
          dateCreated: this.currentDate.toLocaleDateString(),
          definition: null,
          quality: 0,
          likes: 0
      }
      this._compiler.clearCache();
  }

  ngOnInit() {

     // Get the route parameter
     let id = this.route.snapshot.params['id'];

     // Get one user, with identifier from above
     // The user is in the "data" property
     this.manager.englishGetByID(id).subscribe(response => this.term = response);

  };

  // Form submit button handler
  addDef(): void {



    // Send request
    this.manager.englishDefAdd(this.term._id, this.newDef).subscribe(response => {
      this.newDefResult.authorName = this.newDef.authorName;
      this.newDefResult.dateCreated = this.newDef.dateCreated;
      this.newDefResult.definition = this.newDef.definition;
      this.newDefResult.quality = this.newDef.quality;
      this.newDefResult.likes = this.newDef.likes;

    });

    // Here we can do whatever tasks we need to do
    // For now, we'll just dump content to the console
    /*console.log(`Added \n Word: ${this.newDef.wordEnglish}
                \n Image: ${this.newDef.image}
                \n Audio: ${this.newDef.audio}
                \n URL: ${this.newDef.linkAuthoritative}
                \n Wiki: ${this.newDef.linkWikipedia}
                \n Youtube: ${this.newDef.linkYouTube}
                \n Author: ${this.newDef.authorName}
                \n Definition: ${this.newDef.definitions[0].definition}`);*/
    // In a real app, we must redirect to fulfill the PRG pattern
    
    this.router.navigate([`/term/english/details/${ this.term._id }`]);
  }

}
