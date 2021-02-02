import { AfterContentInit, Component, OnDestroy, OnInit, QueryList, ContentChildren, ViewChildren, Input } from "@angular/core";
import { BaseComponent } from "src/app/components/base.component";
import { WizardStep } from "../../directives/wizard-step.directive";
import { WizardSummary } from "../../models/wizard-summary";
import { WizardStepService } from "../../services/wizard-step.service";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent extends BaseComponent implements OnInit, AfterContentInit, OnDestroy {

  @Input() title: string = '';
  @ContentChildren(WizardStep, { read: WizardStepService }) stepsList: QueryList<WizardStepService> | undefined;

  public currentStep: number = 0;
  public hideNext: boolean = false;
  public disableBack: boolean = true;
  public summary: WizardSummary[] = [];
  public showSummary: boolean = false;

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.showStep();
  }

  public handleNext() {
    if (this.canGoNext) {
      this.hideStep();
      this.currentStep++;
      this.showStep();
      this.updateActionButtons();
    }
  }

  public handleBack() {
    if (this.canGoBack) {
      this.hideStep();
      this.currentStep--;
      this.showStep();
      this.updateActionButtons();
    }
  }

  public handleSubmit() {
    this.summary = [];
    this.steps.forEach((s, i) => this.summary.push({ step: i + 1, value: s.getData() || 'N/A' }));
    this.reset();
    this.showSummary = true;
  }

  public clearSummary() {
    this.showSummary = false;
    this.summary = [];
  }

  private showStep() {
    this.step.show();
  }

  private hideStep() {
    this.step.hide();
  }

  private updateActionButtons() {
    this.hideNext = !this.canGoNext;
    this.disableBack = !this.canGoBack;
  }

  private get canGoNext() {
    return this.currentStep < this.steps.length - 1;
  }

  private get canGoBack() {
    return this.currentStep > 0;
  }

  private get steps() {
    return this.stepsList!.toArray();
  }

  private get step() {
    return this.steps[this.currentStep] as WizardStepService;
  }

  private reset() {
    this.currentStep = 0;
    this.steps.forEach(s => { s.reset(); s.hide(); });
    this.hideNext = false;
    this.disableBack = true;
    this.showStep();
  }
}