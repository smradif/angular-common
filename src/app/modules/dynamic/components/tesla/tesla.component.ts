import { Component } from '@angular/core';
import { BaseCarComponent } from '../base-car.component';

@Component({
  selector: 'app-tesla',
  templateUrl: './tesla.component.html',
  styleUrls: ['./tesla.component.scss']
})
export class TeslaComponent extends BaseCarComponent {
}
