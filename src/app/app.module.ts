import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IrishComponent } from './irish/irish.component';
import { EnglishComponent } from './english/english.component';
import { FormsModule } from '@angular/forms';
import {HalfService} from './service/Half.service'; // make connection with half.service.ts file



@NgModule({
  declarations: [
    AppComponent,
    IrishComponent,
    EnglishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HalfService], //changed for service
  bootstrap: [AppComponent]
})
export class AppModule { }
