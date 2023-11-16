import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableStudentsComponent } from './components/table-students/table-students.component';

import { HttpClientModule } from '@angular/common/http';
import { TableStudentsService } from './services/table-students.service';
import { RoutingComponent } from './components/routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    TableStudentsComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TableStudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
HttpClientModule