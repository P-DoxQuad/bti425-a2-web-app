import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataManagerService } from './data-manager.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { TermEnglish, Definition } from "./data-class";
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-def',
  templateUrl: './edit-definition.component.html',
  styleUrls: ['./edit-definition.component.css']
})
export class EditDefinitionComponent implements OnInit {
// Data-holding properties
changeDef: TermEnglish;
newDef: TermEnglish;
currentDate = new Date;
showarea = false;

constructor(private manager: DataManagerService, private router: Router, private route: ActivatedRoute) {

  // Define the user objects
  this.changeDef = new TermEnglish();
}

ngOnInit() {

  // If required, go and get data that would be needed to render the form
  this.changeDef.dateRevised = this.currentDate.toLocaleDateString();

  // Get the route parameter
  let id = this.route.snapshot.params['id'];

  // Get one user, with identifier from above
  // The user is in the "data" property
  this.manager.englishGetByID(id).subscribe(response => this.changeDef = response);

  this.newDef = {
    wordEnglish: this.changeDef.wordEnglish,
    wordNonEnglish: this.changeDef.wordEnglish,
    wordExpanded: this.changeDef.wordExpanded,
    languageCode: this.changeDef.languageCode,
    image: this.changeDef.image,
    imageType: this.changeDef.imageType,
    audio: this.changeDef.audio,
    audioType: this.changeDef.audioType,
    linkAuthoritative: this.changeDef.linkAuthoritative,
    linkWikipedia: this.changeDef.linkWikipedia,
    linkYouTube: this.changeDef.linkYouTube,
    authorName: this.changeDef.authorName,
    dateCreated: this.changeDef.dateCreated,
    dateRevised: this.changeDef.dateRevised,
    fieldOfStudy: this.changeDef.fieldOfStudy,
    helpYes: this.changeDef.helpYes,
    helpNo: this.changeDef.helpNo,
    definitions: [{
      authorName: "",
      dateCreated: "",
      definition: "",
      quality: 0,
      like: 0
    }]
  }
  /*this.newTerm = {
    wordEnglish: null,
    wordNonEnglish: null,
    wordExpanded: null,
    languageCode: "EN",
    image: "http://",
    imageType: null,
    audio: "http://",
    audioType: null,
    linkAuthoritative: "http://",
    linkWikipedia: "http://www.wikipedia.com/",
    linkYouTube: "http://www.youtube.com/",
    authorName: null,
    dateCreated: this.currentDate.toLocaleDateString(),
    dateRevised: null,
    fieldOfStudy: null,
    helpYes: 0,
    helpNo: 0,
    definitions: [{
      authorName: null,
      dateCreated: this.currentDate.toLocaleDateString(),
      definition: null,
      quality: 0,
      like: 0
    }]
  }*/
};

// Form submit button handler
editDef(): void {

  // Send request
  this.manager.englishTermAdd(this.changeDef).subscribe(t => this.changeDef = t);

  // Here we can do whatever tasks we need to do
  // For now, we'll just dump content to the console
  /*console.log(`Added \n Word: ${this.newTerm.wordEnglish}
              \n Image: ${this.newTerm.image}
              \n Audio: ${this.newTerm.audio}
              \n URL: ${this.newTerm.linkAuthoritative}
              \n Wiki: ${this.newTerm.linkWikipedia}
              \n Youtube: ${this.newTerm.linkYouTube}
              \n Author: ${this.newTerm.authorName}
              \n Definition: ${this.newTerm.definitions[0].definition}`);*/
  // In a real app, we must redirect to fulfill the PRG pattern
  this.router.navigate(['/terms']);
}

}

