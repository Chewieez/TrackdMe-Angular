import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  model: any = {};

  constructor(public authService: AuthService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'crankset',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_168563_cc-crankset2.svg'));
      
    iconRegistry.addSvgIcon(
      'chain',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_117976_cc-single-chainlink.svg'));
    
    iconRegistry.addSvgIcon(
      'stem',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_108878_cc-stem.svg'));

    iconRegistry.addSvgIcon(
      'pedal',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_117972_cc-single-pedal.svg'));

    iconRegistry.addSvgIcon(
      'bottomBracket',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_117974_cc-bot-bracket.svg'));

    iconRegistry.addSvgIcon(
      'handlebar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_355669_cc-handlebar.svg'));

    iconRegistry.addSvgIcon(
      'tire',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_549552_cc-tire-frontside.svg'));

    iconRegistry.addSvgIcon(
      'frontDer',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_784211_cc-front-der.svg'));

    iconRegistry.addSvgIcon(
      'rearDer',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_784214_cc-rear-der2.svg'));

    iconRegistry.addSvgIcon(
      'cassette',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_894039_cc-cassette.svg'));

    iconRegistry.addSvgIcon(
      'saddle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_894071_cc-saddle2.svg'));

    iconRegistry.addSvgIcon(
      'brakeLever',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_894083_cc-brake-lever.svg'));

    iconRegistry.addSvgIcon(
      'shifter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_894091_cc-shifter.svg'));

    iconRegistry.addSvgIcon(
      'wheel',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_894117_cc-wheel.svg'));

    iconRegistry.addSvgIcon(
      'suspFork',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_1034214_cc-sus-fork.svg'));

    iconRegistry.addSvgIcon(
      'seatpost',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/component-icons/noun_1337274_cc-seatpost.svg'));

    iconRegistry.addSvgIcon(
      'gearPencil',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/noun_1035258_cc-gearPencilIcon.svg')); 
      
    iconRegistry.addSvgIcon(
      'powered-by-strava-horiz',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/api_logo_pwrdBy_strava_horiz_light.svg')); 

      iconRegistry.addSvgIcon(
        'bicycle',
        sanitizer.bypassSecurityTrustResourceUrl('assets//images/noun_1067030_cc.svg')); 
  }
      
  public signin() {
    this.authService.login(this.model.userEmail, this.model.userPassword);
  }

  public signup() {
    this.authService.signup(this.model.userEmail, this.model.userPassword);
  }
    
}
