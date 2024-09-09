import { Component, EventEmitter, input, Input, Output, output } from "@angular/core";

@Component({
    selector: 'expense-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{expense.name}}</h2>
        <div> Date : {{expense.date}} </div>
    </div>
    
    `
})
export class ExpenseThumbnailComponent {
    @Input() expense: any
    someProperty: any = "some value"
    logFoo() {
        console.log('foo')
    }


}