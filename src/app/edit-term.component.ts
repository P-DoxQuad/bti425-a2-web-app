import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataManagerService } from './data-manager.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { TermEnglish, Definition } from "./data-class";
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-term',
  templateUrl: './edit-term.component.html',
  styleUrls: ['./edit-term.component.css']
})
export class EditTermComponent implements OnInit {
// Data-holding properties
term: TermEnglish;
changeTerm: TermEnglish;
currentDate = new Date;

lc = [
    { "value": "EN", "text": "EN"},
    { "value": "FR", "text": "FR"},
    { "value": "ES", "text": "ES"},
    { "value": "RU", "text": "RU"},
    { "value": "UK", "text": "UK"},
    { "value": "BG", "text": "BG"},
    { "value": "EL", "text": "EL"},
    { "value": "VI", "text": "VI"},
  ];

constructor(private manager: DataManagerService, private router: Router, private route: ActivatedRoute) {

  // Define the user objects
  this.changeTerm = new TermEnglish();
}

ngOnInit() {

  // If required, go and get data that would be needed to render the form
  this.changeTerm.dateRevised = this.currentDate.toLocaleDateString();

  // Get the route parameter
  let id = this.route.snapshot.params['id'];

  // Get one user, with identifier from above
  // The user is in the "data" property
  // this.manager.englishGetByID(id).subscribe(response => this.changeTerm = response);
  this.manager.englishGetByID(id).subscribe(response => {
    this.term = response;
    this.changeTerm._id = this.term._id;
    this.changeTerm.wordEnglish = this.term.wordNonEnglish;
    this.changeTerm.wordNonEnglish = this.term.wordNonEnglish;
    this.changeTerm.wordExpanded = this.term.wordExpanded;
    this.changeTerm.languageCode = this.term.languageCode;
    this.changeTerm.image = this.term.image;
    this.changeTerm.imageType = this.term.imageType;
    this.changeTerm.audio = this.term.audio;
    this.changeTerm.audioType = this.term.audioType;
    this.changeTerm.linkAuthoritative = this.term.linkAuthoritative;
    this.changeTerm.linkWikipedia = this.term.linkWikipedia;
    this.changeTerm.linkYouTube = this.term.linkYouTube;
    this.changeTerm.authorName = this.term.authorName;
    this.changeTerm.dateCreated = this.term.dateCreated;
    this.changeTerm.dateRevised = this.term.dateRevised;
    this.changeTerm.fieldOfStudy = this.term.fieldOfStudy;
    this.changeTerm.helpYes = this.term.helpYes;
    this.changeTerm.helpNo = this.term.helpNo;
    this.changeTerm.definitions = this.term.definitions;
  });

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
editTerm(): void {

  // Send request
  // this.manager.englishTermEdit(this.term._id, this.changeTerm).subscribe(t => this.changeTerm = t);
  this.manager.englishTermEdit(this.changeTerm).subscribe(t => this.changeTerm = t);

  // Here we can do whatever tasks we need to do
  // For now, we'll just dump content to the console
  // console.log(`Added \n Word: ${this.changeTerm.wordEnglish}
  //             \n Image: ${this.changeTerm.image}
  //             \n Audio: ${this.changeTerm.audio}
  //             \n URL: ${this.changeTerm.linkAuthoritative}
  //             \n Wiki: ${this.changeTerm.linkWikipedia}
  //             \n Youtube: ${this.changeTerm.linkYouTube}
  //             \n Author: ${this.changeTerm.authorName}
  //             \n Definition: ${this.changeTerm.definitions[0].definition}`);
  // In a real app, we must redirect to fulfill the PRG pattern
  this.router.navigate(['/terms']);
}

}

