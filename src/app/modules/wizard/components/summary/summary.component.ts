import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from "@angular/core";
import { BaseComponent } from "src/app/components/base.component";
import { WizardSummary } from "../../models/wizard-summary";

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends BaseComponent implements OnInit, OnDestroy {
    @Input() summary: WizardSummary[] = [];
    @Output() clear: EventEmitter<void> = new EventEmitter<void>();
    ngOnInit(): void {
    }

    public handleClear() {
        this.clear.emit();
    }
}