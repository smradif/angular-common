import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentName } from './models';
import { DynamicService } from './services/dynamic.service';

@Component({
    selector: 'app-dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent {
    @ViewChild('dynamic', { read: ViewContainerRef, static: true })
    viewContainerRef: ViewContainerRef | undefined;

    constructor(private dynamicService: DynamicService) {

    }

    public loadMercedes(model: string) {
        this.dynamicService.load(this.viewContainerRef!, ComponentName.Mercedes, model);
    }

    public loadTesla(model: string) {
        this.dynamicService.load(this.viewContainerRef!, ComponentName.Tesla, model);
    }

    public loadRangeRover(model: string) {
        this.dynamicService.load(this.viewContainerRef!, ComponentName.RangeRover, model);
    }
}
