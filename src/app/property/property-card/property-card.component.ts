import { Component } from "@angular/core";




@Component({
    selector:'app-property-card',
    templateUrl:'property-card.component.html',
    styleUrls: ['property-card.component.css']
})
export class PropertyComponent {

  property : any = {
    "Id" : 1,
    "Name" : "Edore House",
    "Type" : "House",
    "Price" : 120000

  }
}
