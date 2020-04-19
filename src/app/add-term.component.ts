import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { TermEnglish, AddTermEnglish, Definition } from "./data-class";
import { from } from 'rxjs';

@Component({
  selector: 'app-add-term',
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.css']
})
export class AddTermComponent implements OnInit {

  // Data-holding properties
  newTerm: AddTermEnglish;
  newTermResult:  TermEnglish;
  newDefinition: Definition;
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
    this.newTerm = new AddTermEnglish();
    this.newTermResult = new TermEnglish();
    this.newDefinition = new Definition();
    this.newTerm = {
      wordEnglish: null,
      wordNonEnglish: null,
      wordExpanded: null,
      languageCode: "EN",
      image: null,
      imageType: null,
      audio: null,
      audioType: null,
      linkAuthoritative: null,
      linkWikipedia: null,
      linkYouTube: null,
      authorName: null,
      dateCreated: this.currentDate.toLocaleDateString(),
      dateRevised: null,
      fieldOfStudy: null,
      helpYes: 0,
      helpNo: 0,
      definitions: [
        {
          authorName: this.newTerm.authorName,
          dateCreated: this.currentDate.toLocaleDateString(),
          definition: null,
          quality: 0,
          likes: 0
        }]
    }
    //this.newDefinition = new Definition();
  }

  ngOnInit() {

    // If required, go and get data that would be needed to render the form

  };

  // Form submit button handler
  addTerm(): void {



    // Send request
    this.manager.englishTermAdd(this.newTerm).subscribe(response => {
      this.newTermResult.wordEnglish = this.newTerm.wordEnglish;
      this.newTermResult.wordNonEnglish = this.newTerm.wordNonEnglish;
      this.newTermResult.wordExpanded = this.newTerm.wordExpanded;
      this.newTermResult.languageCode = this.newTerm.languageCode;
      this.newTermResult.image = this.newTerm.image;
      this.newTermResult.imageType = this.newTerm.imageType;
      this.newTermResult.audio = this.newTerm.audio;
      this.newTermResult.audioType = this.newTerm.audioType;
      this.newTermResult.linkAuthoritative = this.newTerm.linkAuthoritative;
      this.newTermResult.linkWikipedia = this.newTerm.linkWikipedia;
      this.newTermResult.linkYouTube = this.newTerm.linkYouTube;
      this.newTermResult.authorName = this.newTerm.authorName;
      this.newTermResult.fieldOfStudy = this.newTerm.fieldOfStudy;
      this.newTermResult.helpYes = this.newTerm.helpYes;
      this.newTermResult.helpNo = this.newTerm.helpNo;
      this.newTermResult.definitions[0].authorName = this.newTermResult.authorName;
      this.newTermResult.definitions[0].dateCreated = this.newDefinition.dateCreated;
      this.newTermResult.definitions[0].definition = this.newDefinition.definition;
      this.newTermResult.definitions[0].quality = this.newDefinition.quality;
      this.newTermResult.definitions[0].likes = this.newDefinition.likes;
      this.newTermResult.dateCreated = this.newTerm.dateCreated;
      this.newTermResult.dateRevised = this.newTerm.dateRevised;
    });

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
