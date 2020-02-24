import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-greetings',
  templateUrl: './send-greetings.component.html',
  styleUrls: ['./send-greetings.component.css']
})
export class SendGreetingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}




