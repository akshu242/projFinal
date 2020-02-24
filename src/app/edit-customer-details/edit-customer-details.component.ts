import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-edit-customer-details',
  templateUrl: './edit-customer-details.component.html',
  styleUrls: ['./edit-customer-details.component.css']
})
export class EditCustomerDetailsComponent implements OnInit {

  custId: any;
  customer: any;
  constructor(public route: ActivatedRoute,
              public service: DataService,
              public router: Router) {
               }

               editCustomerById(formData) {
                console.log(formData.form.value);
                this.customer = formData.form.value;
                console.log('info to update - ' + this.customer);
                console.log(this.custId);
                // this.agent = formData
                this.service.editCustomerById(this.custId, this.customer).subscribe((result) => {
                  console.log(this.customer);
                  this.router.navigate(['/agent']);
                });
               }

  ngOnInit() {
    this.route.paramMap.subscribe((result) => {
       this.custId = result.get('custId');
       console.log('custId' + this.custId);

      // let observableResult =
      //         this.service.getCustomerById(this.customerId);

      //  observableResult.subscribe((recordsFound)=>{
      //    console.log(recordsFound[0]);
      //    this.customer =  recordsFound[0];
      //  });

    });
  }

}
