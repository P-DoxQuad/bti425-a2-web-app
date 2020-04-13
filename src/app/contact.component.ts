import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Birthday = new Date("1991-06-20");
  ageDif = Date.now() - this.Birthday.getTime();
  ageDate = new Date(this.ageDif); // miliseconds from epoch
  age;

  constructor() {
    this.age = Math.abs(this.ageDate.getUTCFullYear() - 1970);

  }

  ngOnInit(): void {
  }

}
