import { AfterContentInit, Component, OnDestroy, OnInit, QueryList, ContentChildren } from "@angular/core";
import { BaseComponent } from "src/app/components/base.component";
import { WizardStep } from "./directives/wizard-step.directive";
import { WizardStepService } from "./services/wizard-step.service";

@Component({
  selector: 'app-wizard-container',
  templateUrl: './wizard-container.component.html',
  styleUrls: ['./wizard-container.component.scss']
})
export class WizardContainerComponent extends BaseComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }
}