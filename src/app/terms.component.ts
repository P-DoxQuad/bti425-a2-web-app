import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
//import { Observable } from "rxjs";
import { TermEnglish, Definition } from "./data-class";
//import { Post, Comment, Geo, Address, Company, User } from "./data-class-test";


@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(private manager: DataManagerService) { }

  terms: TermEnglish[];


  ngOnInit() {

    // Just take ten (10) of them

    // Fetch posts...
    this.manager.getAllEnglish().subscribe(response => this.terms = response);

    // Fetch comments...
    //this.manager.getComments().subscribe(response => this.comments = response.slice(0, 10));

    // Fetch users...
    //this.manager.getUsers().subscribe(response => this.users = response.slice(0, 10));
  }

}
