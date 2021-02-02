import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/components/base.component';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {

    public title: string = '';

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title) {
        super();
    }

    public ngOnInit(): void {
        this.subs.sink = this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((route) => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                }),
                mergeMap((route) => route.data))
            .subscribe((data) => {
                this.title = data.title;
                this.titleService.setTitle(data.title);
            });
    }
}

