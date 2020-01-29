import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-cust-health',
  templateUrl: './add-cust-health.component.html',
  styleUrls: ['./add-cust-health.component.css']
})
export class AddCustHealthComponent implements OnInit {


  agent: any;
  customer: any;
  health: any;
  customerId: any;
  constructor(public service: DataService,
              public router: Router,
              public route: ActivatedRoute) {
                this.agent = JSON.parse(window.sessionStorage.getItem('object'));
               }

  addHealthDetails(formData) {
    console.log(formData.form.value);
    let hel = formData.form.value;

    console.log(hel);
    this.service.addHealthDetails(this.customerId, hel).subscribe((result) => {
      console.log(hel);
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
