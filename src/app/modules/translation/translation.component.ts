import { Component, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BaseComponent } from "src/app/components/base.component";

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent extends BaseComponent implements OnInit, OnDestroy {

  public currentLanguage: any = 'en';
  public languageCode = 'en';
  constructor(public translate: TranslateService) { 
    super();
  }

  languages = [
    { 'code': 'en', 'name': 'English' },
    { 'code': 'ar', 'name': 'Arabic' }
  ]

  changeLanguage(code: any) {
    console.log(code)
    this.currentLanguage = code;
    this.translate.use(this.currentLanguage);
  }

  ngOnInit(): void {
  }
}