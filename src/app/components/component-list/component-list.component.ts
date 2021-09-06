import { Component, OnInit, Input } from '@angular/core';
import { BikeComponent } from '../../models/bike-component.model';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
  @Input() components: BikeComponent[];

  public todaysDate: number;


  constructor() {
    this.todaysDate = Date.now();
  }
  
  ngOnInit() {
    const comps = this.components;
    const x = 1;

  }


  public sendToAEditComponent(): void {
    console.log("this should send user to edit a component, or open a edit component modal");
  }

  public changeCompActiveState(): void {
    console.log("this should change the components active state");
  }
}
