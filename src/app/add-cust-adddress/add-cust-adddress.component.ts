import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-cust-adddress',
  templateUrl: './add-cust-adddress.component.html',
  styleUrls: ['./add-cust-adddress.component.css']
})
export class AddCustAdddressComponent implements OnInit {

  agent: any;
  customer: any;
  address: any;
  customerId: any;
  constructor(public service: DataService,
              public router: Router,
              public route: ActivatedRoute) {
                this.agent = JSON.parse(window.sessionStorage.getItem('object'));
               }

  addAddressDetails(formData) {
    console.log(formData.form.value);
    let addr = formData.form.value;

    console.log(addr);
    this.service.addAddressDetails(this.customerId, addr).subscribe((result) => {
      console.log(addr);
      this.router.navigate(['/agent']);
    })
  }
  ngOnInit() {
    this.agent = JSON.parse(window.sessionStorage.getItem('object'));
    this.route.paramMap.subscribe((result) => {
       this.customerId= result.get('custId');
      console.log(this.customerId);

      let observableResult =
              this.service.getCustomerById(this.customerId);

       observableResult.subscribe((recordsFound)=>{
         console.log(recordsFound[0]);
         this.customer =  recordsFound[0];
       });

    });
  }

}




