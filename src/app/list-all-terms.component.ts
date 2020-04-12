import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { DataManagerService } from "./data-manager.service";
//import { Observable } from "rxjs";
import { TermEnglish, Definition } from "./data-class";
import { from } from 'rxjs';


@Component({
  selector: 'app-list-all-terms',
  templateUrl: './list-all-terms.component.html',
  styleUrls: ['./list-all-terms.component.css']
})
export class ListAllTermsComponent implements OnInit {

  constructor(private manager: DataManagerService, private route: ActivatedRoute, private router: Router) { }

  terms: TermEnglish[];
  term: TermEnglish;


  ngOnInit() {

    // Just take ten (10) of them

    // Fetch posts...
    this.manager.getAllEnglish().subscribe(response => this.terms = response);



    // Fetch comments...
    //this.manager.getComments().subscribe(response => this.comments = response.slice(0, 10));

    // Fetch users...
    //this.manager.getUsers().subscribe(response => this.users = response.slice(0, 10));
  }
  // Form submit button handler

  getByWord(): void {
    let text = this.route.snapshot.params['word'];

    //this.manager.englishGetByName(text).subscribe(response => this.terms = response.wordEnglish);
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
