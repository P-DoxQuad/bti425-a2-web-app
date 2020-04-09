import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataManagerService } from "./data-manager.service";
import { TermEnglish, TermSingle } from "./data-class";

@Component({
  selector: 'app-view-term',
  templateUrl: './view-term.component.html',
  styleUrls: ['./view-term.component.css']
})
export class ViewTermComponent implements OnInit {

  // reqres.in web service data
  terms: TermEnglish[];
  term: TermSingle

  constructor(private manager: DataManagerService, private route: ActivatedRoute) { }

  ngOnInit() {

    // Get the route parameter
    let id = this.route.snapshot.params['id'];

    // Get one user, with identifier from above
    // The user is in the "data" property
    this.manager.englishGetByID(id).subscribe(response => this.term = response);
  }

}
