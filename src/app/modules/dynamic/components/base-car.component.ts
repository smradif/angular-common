import { Directive } from "@angular/core";

@Directive({
    selector: 'app-base-car',
})
export class BaseCarComponent {
    public model: string = '';
    public imageUrl: string = '';
    public setProperties(model: string, imageUrl: string) {
        this.model = model;
        this.imageUrl = imageUrl;
    }
}