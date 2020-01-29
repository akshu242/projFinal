import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-pol-by-cid',
  templateUrl: './show-pol-by-cid.component.html',
  styleUrls: ['./show-pol-by-cid.component.css']
})
export class ShowPolByCidComponent implements OnInit {

  currentCustomer: any;
  customer: any;
  policies: any;
  constructor(public service: DataService) {
    this.getCustomerById();
  }

  getCustomerById() {
    this.currentCustomer = JSON.parse(window.sessionStorage.getItem('object'));
    this.service.getCustomerById(this.currentCustomer.custId).subscribe((result) => {

      this.customer = result;
      //  this.customersList = this.agent.policyHolders[0];
      // if(this.customers == null)
      this.policies = this.customer.policies;
      console.log(this.customer);

      console.log(this.customer.policies);
      }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
