import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataManagerService } from "./data-manager.service";
//import { Observable } from "rxjs";
import { TermEnglish, Definition } from "./data-class";
import { from } from 'rxjs';
//import { Post, Comment, Geo, Address, Company, User } from "./data-class-test";


@Component({
  selector: 'app-list-all-terms',
  templateUrl: './list-all-terms.component.html',
  styleUrls: ['./list-all-terms.component.css']
})
export class ListAllTermsComponent implements OnInit {

  constructor(private manager: DataManagerService, private route: ActivatedRoute, private router: Router) { }

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

  getByWord(): void {
    let text = this.route.snapshot.params['word'];

    //this.manager.englishGetByName(text).subscribe(response => this.terms = response.wordEnglish);
  }

}
