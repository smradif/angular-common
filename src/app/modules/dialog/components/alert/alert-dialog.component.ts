import { Component, Inject, OnInit } from '@angular/core';
import { DialogOptionsContent, DIALOG_OPTIONS_CONTENT } from '../../models/dialog.model';

@Component({
    selector: 'app-alert-dialog',
    templateUrl: './alert-dialog.component.html',
    styleUrls: ['./alert-dialog.component.scss']
})

export class AlertDialogComponent implements OnInit {
    public title: string = '';
    constructor(@Inject(DIALOG_OPTIONS_CONTENT) public options: DialogOptionsContent) {
    }
    
    ngOnInit(): void {
        this.title = this.options.title;
    }

    public ok(): void {
        this.options.close!(true);
    }
}
