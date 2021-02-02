import { Component, forwardRef, OnDestroy, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/components/base.component";
import { WizardStepService } from "../../services/wizard-step.service";

@Component({
    selector: 'app-step1',
    templateUrl: './step1.component.html',
    styleUrls: ['./step1.component.scss'],
    providers: [
        { provide: WizardStepService, useExisting: forwardRef(() => Step1Component)  }
    ]
})
export class Step1Component extends BaseComponent implements WizardStepService, OnInit, OnDestroy {
    public showContent: boolean = false;
    public stepValue: any;
    show(): void {
        this.showContent = true;
    }

    hide(): void {
        this.showContent = false;
    }

    getData(): any {
        return this.stepValue;
    }

    reset(): void{
        this.stepValue = '';
    }

    ngOnInit(): void {
    }
}