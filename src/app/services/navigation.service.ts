import { Injectable } from '@angular/core';
import { NavigationItem } from '../models/inavigation-item';
import { routes } from '../models/routes';
@Injectable()
export class NavigationService {
    private navigationItems: NavigationItem[] = [];
  
    public getNavigationItems(allowEmptyPath: boolean = false) {
        routes.forEach(route => {
            if (route.data) {
                if (route.path) {
                    this.navigationItems.push({ title: route.data.title!, path: route.path, tooltip: route.data.tooltip! })
                } else if (allowEmptyPath) {
                    this.navigationItems.push({ title: route.data.title!, path: '/', tooltip: route.data.tooltip! });
                }
            }
        });
        return this.navigationItems;
    }
}
