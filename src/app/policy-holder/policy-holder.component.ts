import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-policy-holder',
  templateUrl: './policy-holder.component.html',
  styleUrls: ['./policy-holder.component.css']
})
export class PolicyHolderComponent implements OnInit {

  customer : any;
  constructor(private auth: AuthService) { }
  logOut() {
    this.auth.Logout();

  }
  ngOnInit() {
    this.customer = JSON.parse(window.sessionStorage.getItem('object'));
    console.log(this.customer.custId);

  }

}
