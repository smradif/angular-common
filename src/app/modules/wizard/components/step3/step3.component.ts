import { Component, forwardRef, OnDestroy, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/components/base.component";
import { WizardStepService } from "../../services/wizard-step.service";

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  providers: [
    { provide: WizardStepService, useExisting: forwardRef(() => Step3Component) }
  ]
})
export class Step3Component extends BaseComponent implements WizardStepService, OnInit, OnDestroy {
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