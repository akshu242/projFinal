import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-policy-details',
  templateUrl: './add-policy-details.component.html',
  styleUrls: ['./add-policy-details.component.css']
})
export class AddPolicyDetailsComponent implements OnInit {

  agent: any;
  customer: any;
  policy: any;
  customerId: any;
  constructor(public service: DataService,
              public router: Router,
              public route: ActivatedRoute) {
                this.agent = JSON.parse(window.sessionStorage.getItem('object'));
               }

  addPolicyDetails(formData) {
    console.log(formData.form.value);
    let pol = formData.form.value;

    console.log(pol);
    this.service.addPolicyDetails(this.customerId, pol).subscribe((result) => {
      console.log(pol);
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
