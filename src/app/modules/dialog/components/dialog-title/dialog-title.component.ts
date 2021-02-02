import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dialog-title',
    templateUrl: './dialog-title.component.html',
    styleUrls: ['./dialog-title.component.scss']
})

export class DialogTitleComponent {
    @Input() title: string = '';
}
