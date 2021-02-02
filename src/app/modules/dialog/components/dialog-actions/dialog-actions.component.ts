import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dialog-actions',
    templateUrl: './dialog-actions.component.html',
    styleUrls: ['./dialog-actions.component.scss']
})

export class DialogActionsComponent {
    @Input() okText: string = 'Ok';
    @Input() cancelText: string = 'Cancel';
    @Input() canCancel: boolean = true;
    @Input() isLoading: boolean = false;
    @Output() okOut: EventEmitter<void> = new EventEmitter<void>();
    @Output() cancelOut: EventEmitter<void> = new EventEmitter<void>();

    public ok(): void {
        this.okOut.emit!();
    }

    public cancel(): void {
        this.cancelOut.emit!();
    }
}
