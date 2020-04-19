import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { DataManagerService } from "./data-manager.service";
//import { Observable } from "rxjs";
import { TermEnglish, Definition } from "./data-class";
import { from, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-list-all-terms',
  templateUrl: './list-all-terms.component.html',
  styleUrls: ['./list-all-terms.component.css']
})
export class ListAllTermsComponent implements OnInit {

  constructor(private manager: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  terms: TermEnglish[];
  term: TermEnglish;

  search: string;


  ngOnInit() {

    // Just take ten (10) of them

    // Fetch posts...
    this.manager.getAllEnglish().subscribe(response => this.terms = response);
  }
  // Form submit button handler

  getByWord(): void {
    //let text = this.route.snapshot.params['text'];
    //let text =

    if (this.search.length >= 2 && this.search.length <= 8) {
      delete(this.terms);
      this.manager.englishGetByName(this.search).subscribe(response => this.term = response);
    } else if (this.search.length == 1) {
      delete(this.term);
      this.manager.getAllEnglish().subscribe(response => this.terms = response);
    }
  }

  deleteTerm(f: NgForm): void {

    // Send request
    this.manager.englishTermDelete(this.term._id).subscribe();

    // Here we can do whatever tasks we need to do
    // For now, we'll just dump content to the console
    console.log(`Deleted Word: ${this.term.wordEnglish}`);
    // In a real app, we must redirect to fulfill the PRG pattern
    //this.router.navigate(['/terms']);
  }

}
