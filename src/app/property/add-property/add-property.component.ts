import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('formTabs', {static: false}) formTabs : TabsetComponent;

  BHKtypes: Array<string> = ["1","2","3"];
  propertyTypes: Array<string> = ["House","Apartment","Duplex"]
  furnishTypes: Array<string> = ["Fully","Semi","Unfurnished"]
  locationTypes: Array<string> = ["East","West","South","North"]
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onBack() : void {
    this.router.navigate(['/'])
  }

  onSubmit(Form : NgForm) : void {
    console.log("Congrats,form submitted");
    console.log(Form);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
