import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItem } from 'src/app/models/inavigation-item';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {

  public navigationItems: NavigationItem[] = [];

  constructor(
    private injector: Injector,
    private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.navigationItems = this.navigationService.getNavigationItems(true);
  }

  public navigateTo(path: string) {
    const router = this.injector.get(Router)
    router.navigate([`/${path}`]);
  }
}

