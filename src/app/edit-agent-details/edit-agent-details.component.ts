import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-agent-details',
  templateUrl: './edit-agent-details.component.html',
  styleUrls: ['./edit-agent-details.component.css']
})
export class EditAgentDetailsComponent implements OnInit {

  agentId: any;
  agent: any;
  constructor(public route: ActivatedRoute,
              public service: DataService,
              public router: Router) {
               }

               editAgentById(formData) {
                console.log(formData.form.value);
                this.agent = formData.form.value;
                // this.agent = formData
                this.service.editAgentById(this.agentId, this.agent).subscribe((result) => {
                  console.log(this.agent);
                  this.router.navigate(['/clia']);
                });
               }

  ngOnInit() {
    this.route.paramMap.subscribe((result) => {
       this.agentId = result.get('agentId');
       console.log(this.agentId);

      // let observableResult =
      //         this.service.getCustomerById(this.customerId);

      //  observableResult.subscribe((recordsFound)=>{
      //    console.log(recordsFound[0]);
      //    this.customer =  recordsFound[0];
      //  });

    });
  }

}
