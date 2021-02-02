import { Component, Inject, OnInit, OnDestroy, ViewContainerRef, ViewChild, Injector, Type } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogOptions, DIALOG_OPTIONS_CONTENT } from '../../models/dialog.model';

@Component({
    selector: 'app-popup-dialog',
    template: '<ng-container *ngComponentOutlet="component!; injector: injector!"></ng-container>'
})

export class PopupComponent implements OnInit, OnDestroy {
    @ViewChild('dynamic', { read: ViewContainerRef, static: true })
    viewContainerRef: ViewContainerRef | undefined

    public canCancel: boolean = false;

    public component: Type<any> | undefined;
    public injector: Injector | undefined;

    constructor(
        @Inject(MAT_DIALOG_DATA) private options: DialogOptions,
        private inj: Injector) {
    }

    ngOnInit(): void {
        this.component = this.options.component;
        this.injector = Injector.create({
            providers: [{
                provide: DIALOG_OPTIONS_CONTENT, deps: [], useValue: this.options
            }],
            parent: this.inj
        });
    }

    public ngOnDestroy(): void {
    }
}



