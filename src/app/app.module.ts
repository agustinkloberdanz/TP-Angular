import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableStudentsComponent } from './components/table-students/table-students.component';

import { HttpClientModule } from '@angular/common/http';
import { TableStudentsService } from './services/table-students.service';

@NgModule({
  declarations: [
    AppComponent,
    TableStudentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
HttpClientModule