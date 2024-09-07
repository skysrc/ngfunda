import { Component, EventEmitter, input, Input, Output, output } from "@angular/core";

@Component({
    selector: 'expense-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{expense.name}}</h2>
        <div> Date : {{expense.date}} </div>
        <button class="btn btn-primary" (click)="handleClickMe()">Click Me !</button>
    </div>
    
    `
})
export class ExpenseThumbnailComponent {
    @Input() expense: any
    @Output() eventClick = new EventEmitter()

    handleClickMe() {
        console.log('clicked');
        this.eventClick.emit(this.expense.name);
    }
}