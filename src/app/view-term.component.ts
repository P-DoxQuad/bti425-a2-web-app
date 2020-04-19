import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { DataManagerService } from "./data-manager.service";
import { TermEnglish, LikeIncrease, Definition  } from "./data-class";

@Component({
  selector: 'app-view-term',
  templateUrl: './view-term.component.html',
  styleUrls: ['./view-term.component.css']
})
export class ViewTermComponent implements OnInit {

  // reqres.in web service data
  term: TermEnglish;
  likeIncrease: LikeIncrease;
  likeResult: Definition;

  constructor(private manager: DataManagerService, private router: Router, private route: ActivatedRoute) {
    this.term = new TermEnglish();
    this.term.definitions = [];
    this.likeIncrease = new LikeIncrease();
  }

  ngOnInit() {

    // Get the route parameter
    let id = this.route.snapshot.params['id'];

    // Get one user, with identifier from above
    // The user is in the "data" property
    this.manager.englishGetByID(id).subscribe(response => this.term = response);
  }

  // Form submit button handlers
  deleteTerm(): void {

    // Send request
    this.manager.englishTermDelete(this.term._id).subscribe();

    // Here we can do whatever tasks we need to do
    // For now, we'll just dump content to the console
    console.log(`Deleted Word: ${this.term.wordEnglish}`);
    // In a real app, we must redirect to fulfill the PRG pattern
    this.router.navigate(['/terms']);
  }

  increaseLink(): void {

    this.manager.likeDefinition(this.term.definitions[0]._id, this.likeIncrease).subscribe(response => {
      this.likeResult.authorName = this.term.definitions[0].authorName;
      this.likeResult.dateCreated = this.term.definitions[0].dateCreated;
      this.likeResult.definition = this.term.definitions[0].definition;
      this.likeResult.quality = this.term.definitions[0].quality;
      this.likeResult.likes = this.likeIncrease.likes;

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
    this.router.navigate(['/terms']);
  }
}
