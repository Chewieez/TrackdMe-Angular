import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireLite } from 'angularfire-lite';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireLite.forRoot(environment.config)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
