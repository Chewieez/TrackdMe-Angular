import { Component, OnInit, Input } from '@angular/core';
import { BikeComponent } from '../../models/bike-component.model';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
  @Input() components: BikeComponent[];


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
   }

  ngOnInit() {

  }


  public sendToAEditComponent(): void {
    console.log("this should send user to edit a component, or open a edit component modal");
  }

  public changeCompActiveState(): void {
    console.log("this should change the components active state");
  }
}
