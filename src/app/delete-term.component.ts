import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { DataManagerService } from "./data-manager.service";
import { TermEnglish  } from "./data-class";
import { from } from 'rxjs';

@Component({
  selector: 'app-delete-term',
  templateUrl: './delete-term.component.html',
  styleUrls: ['./delete-term.component.css']
})
export class DeleteTermComponent implements OnInit {

  // reqres.in web service data
  term: TermEnglish;

  constructor(private manager: DataManagerService, private router: Router, private route: ActivatedRoute) {
    this.term = new TermEnglish();
    this.term.definitions = [];
  }

  ngOnInit() {

    // Get the route parameter
    let id = this.route.snapshot.params['id'];

    // Get one user, with identifier from above
    // The user is in the "data" property
    this.manager.englishGetByID(id).subscribe(response => this.term = response);
  }

  // Form submit button handler
  deleteTerm(): void {

    // Send request
    this.manager.englishTermDelete(this.term._id).subscribe();

    // Here we can do whatever tasks we need to do
    // For now, we'll just dump content to the console
    console.log(`Deleted Word: ${this.term.wordEnglish}`);
    // In a real app, we must redirect to fulfill the PRG pattern
    this.router.navigate(['/terms']);
  }

}
