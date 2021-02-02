import { Component, OnDestroy, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/components/base.component";

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent extends BaseComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }
}