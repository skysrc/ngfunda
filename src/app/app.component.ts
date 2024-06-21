import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'expense';
  expense = {
    name: "Bread",
    category: "groceries",
    price: "123.55"
  };
}
