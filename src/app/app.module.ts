import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTypeComponent } from './data-type/data-type.component';
import { InputFormmComponent } from './input-formm/input-formm.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTypeComponent,
    InputFormmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
