import { Injectable } from "@angular/core";

@Injectable()
export abstract class WizardStepService {
   abstract show(): void;
   abstract hide(): void;
   abstract getData(): any;
   abstract reset(): any;
}