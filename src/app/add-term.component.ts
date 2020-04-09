import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { TermEnglish, Definition, /*ReqresUserCreate, ReqresUserCreateResponse*/ } from "./data-class";
import { from } from 'rxjs';

@Component({
  selector: 'app-add-term',
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.css']
})
export class AddTermComponent implements OnInit {

  // Data-holding properties
  //newTerm: ReqresUserCreate;
  newTerm: TermEnglish;
  //newTermResult: ReqresUserCreateResponse;
  currentDate = new Date;
  constructor(private manager: DataManagerService, private router: Router) {

    // Define the user objects
    //this.newTerm = new ReqresUserCreate();
    this.newTerm = new TermEnglish();
    //this.newTermResult = new ReqresUserCreateResponse();
  }

  ngOnInit() {

    this.currentDate.toString();

    // If required, go and get data that would be needed to render the form
    // this.newTerm = {
    //   wordEnglish: "",
    //   wordNonEnglish: "",
    //   wordExpanded: "",
    //   languageCode: "",
    //   image: "http://",
    //   imageType: "",
    //   audio: "http://",
    //   audioType: "",
    //   linkAuthoritative: "http://",
    //   linkWikipedia: "http://www.wikipedia.com",
    //   linkYouTube: "http://www.youtube.com/",
    //   authorName: "",
    //   dateCreated: this.currentDate.toString(),
    //   dateRevised: "",
    //   fieldOfStudy: "",
    //   helpYes: 0,
    //   helpNo: 0,
    //   definitions: Definition[
    //     authorName: "",
    //     dateCreated: this.currentDate.toString(),
    //     definition: "",
    //     quality: 0,
    //     link: 0
    //   ]
    // }
  };

  // Form submit button handler
  addTerm(): void {

    // Send request
    this.manager.englishTermAdd(this.newTerm).subscribe(u => this.newTerm = u);

    // Here we can do whatever tasks we need to do
    // For now, we'll just dump content to the console
    console.log(`Added ${this.newTerm.wordEnglish} the ${this.newTerm.wordNonEnglish}`);
    // In a real app, we must redirect to fulfill the PRG pattern
    this.router.navigate(['/terms']);
  }

}
