import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/materials.module';
import { WizardContainerComponent } from './wizard-container.component';
import { WizardContainerRoutes } from './wizard.-container.router';
import { RetryModule } from '../retry/retry.module';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { WizardStep } from './directives/wizard-step.directive';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
    declarations: [
        WizardContainerComponent,
        WizardComponent,
        WizardStep,
        Step1Component,
        Step2Component,
        Step3Component,
        SummaryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(WizardContainerRoutes),
        MaterialModule,
        RetryModule.customizeDomiain('', 3)
    ],
    providers: [
    ]
})

export class WizardContainerModule { }
