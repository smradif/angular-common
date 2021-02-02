import { Component, Inject, OnInit } from '@angular/core';
import { DialogOptionsContent, DIALOG_OPTIONS_CONTENT } from '../../models/dialog.model';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})

export class ConfirmDialogComponent implements OnInit {
    public title: string = '';
    
    constructor(@Inject(DIALOG_OPTIONS_CONTENT) public options: DialogOptionsContent) {
    }

    ngOnInit(): void {
        this.title = this.options.title;
    }

    public ok(): void {
        this.options.close!(true);
    }

    public cancel(): void {
        this.options.close!(false);
    }
}
