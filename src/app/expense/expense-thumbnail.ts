import { Component, EventEmitter, input, Input, Output, output } from "@angular/core";

@Component({
    selector: 'expense-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{expense.name}}</h2>
        <div> Date : {{expense.date}} </div>
        <div>
            <span class="pad-left">
                {{expense.time}}
            </span>
        </div>
    </div>
    `,
    styles: [`
            .pad-left { margin-left: 10px;}
            .well div {color:#bbb}
        `
    ]
})
export class ExpenseThumbnailComponent {
    @Input() expense: any
}