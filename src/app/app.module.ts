import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseListComponent } from './expense/expense-list.component';
import { ExpenseThumbnailComponent } from './expense/expense-thumbnail';
import { NavBarComponent } from './nav/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    ExpenseThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
