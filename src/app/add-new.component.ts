import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { TermEnglish, /*ReqresUserCreate, ReqresUserCreateResponse*/ } from "./data-class";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  // Data-holding properties
  //newTerm: ReqresUserCreate;
  //newTermResult: ReqresUserCreateResponse;

  constructor(private manager: DataManagerService, private router: Router) {

    // Define the user objects
    //this.newTerm = new ReqresUserCreate();
    //this.newTermResult = new ReqresUserCreateResponse();
  }

  ngOnInit() {

    // If required, go and get data that would be needed to render the form
  }

  // Form submit button handler
  addTerm(): void {

    // Send request
    //this.manager.TermAdd(this.newTerm).subscribe(u => this.newTermResult = u);

    // Here we can do whatever tasks we need to do
    // For now, we'll just dump content to the console
    //console.log(`Added ${this.newUser.name} the ${this.newUser.job}`);
    // In a real app, we must redirect to fulfill the PRG pattern
    //this.router.navigate(['/users']);
  }

}
