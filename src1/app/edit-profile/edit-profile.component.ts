import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  emp:any;
  msg:any;
  image:any;
  constructor(public dataService: DataService,public router: Router) { }
  onSelectFile(event) {
    this.image = event.target.files[0];
}
  add(formdata){
    console.log(formdata.form.value);
    this.emp= formdata.form.value;

    console.log(this.emp);
    this.dataService.AddData(this.emp,this.image).subscribe((res) => {
      console.log(res);
      //this.msg="Record added succesfully";
      this.router.navigate(['home']);
    });
    //alert("In Add");
  }

  ngOnInit() {


  }

}
