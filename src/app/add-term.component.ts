import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { TermEnglish, Definition } from "./data-class";
import { from } from 'rxjs';

@Component({
  selector: 'app-add-term',
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.css']
})
export class AddTermComponent implements OnInit {

  // Data-holding properties
  newTerm: TermEnglish;
  currentDate = new Date;
  // langcode = new Option;
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

  constructor(private manager: DataManagerService, private router: Router) {

    // Define the user objects
    this.newTerm = new TermEnglish();
  }

  ngOnInit() {

    // If required, go and get data that would be needed to render the form
    this.newTerm = {
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
    }
  };

  // Form submit button handler
  addTerm(): void {

    // Send request
    this.manager.englishTermAdd(this.newTerm).subscribe(t => this.newTerm = t);

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
