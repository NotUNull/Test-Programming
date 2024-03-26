import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitialComponent } from './initial/initial.component';
import { ResultComponent } from './result/result.component';
import { FormComponent } from './result/form/form.component';
import { TableComponent } from './result/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    ResultComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
