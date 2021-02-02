import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from "@angular/core";
import { MercedesComponent } from "../components/mercedes/mercede.scomponent";
import { RangeRoverComponent } from "../components/range-rover/range-rover.component";
import { TeslaComponent } from "../components/tesla/tesla.component";
import { ComponentName } from "../models";

@Injectable()
export class DynamicService {
    private model: string = '';
    private viewContainerRef: ViewContainerRef | undefined;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver) {
    }

    public load(viewContainerRef: ViewContainerRef, componentName: ComponentName, model: string) {
        this.model = model;
        this.viewContainerRef = viewContainerRef;
        switch (componentName) {
            case ComponentName.Mercedes:
                this.loadMercedes();
                break;
            case ComponentName.Tesla:
                this.loadTesla();
                break;
            case ComponentName.RangeRover:
                this.loadRangeRover();
                break;
            default: break;
        }

    }
    public loadMercedes() {
        const mercedes = this.getComponent<MercedesComponent>(MercedesComponent!);
        const modelFullname = `Mercedes ${this.model}`;
        const imageUrl = `../../../../../assets/images/mercedes-${this.model}.jpg`;
        mercedes.setProperties(modelFullname, imageUrl);
    }

    public loadTesla() {
        const tesla = this.getComponent<TeslaComponent>(TeslaComponent!);
        const modelFullname = `Tesla ${this.model}`;
        const imageUrl = `../../../../../assets/images/tesla-${this.model}.jpg`;
        tesla.setProperties(modelFullname, imageUrl);
    }

    public loadRangeRover() {
        const rangeRover = this.getComponent<RangeRoverComponent>(RangeRoverComponent!);
        const modelFullname = `Range Rover ${this.model}`;
        const imageUrl = `../../../../../assets/images/range-rover-${this.model}.jpg`;
        rangeRover.setProperties(modelFullname, imageUrl);
    }

    private getImageUrl() {
        const imageUrl = `../../../../../assets/images/range-rover-${this.model}.jpg`;
        return imageUrl;
    }

    private getComponent<T>(component: Type<Object>) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component!);
        this.viewContainerRef!.clear();
        const componentRef = this.viewContainerRef!.createComponent(componentFactory);
        return componentRef.instance as T;
    }
}