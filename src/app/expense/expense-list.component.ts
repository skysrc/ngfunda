import { Component } from "@angular/core";

@Component({
    selector: 'expense-list',
    template: `
    <div>
        <h1>Upcoming expense</h1>
        <h3>{{expense.someProperty}}</h3>
        <hr/>
        <expense-thumbnail #expense [expense]="expense1"></expense-thumbnail>
        <button class="btn btn-primary" (click)="expense.logFoo()"> Log some foo</button>
    </div>
   `
})
export class ExpenseListComponent {
    expense1 = {
        id: 1,
        name: "Expense 1",
        date: '9/26/2024',
        time: '10:00 am',
        price: 23.33,
        imageUrl: '/assets/images/agnuarlconnect-shield/png'
    }
}