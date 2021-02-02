import { Component, Inject, OnInit } from '@angular/core';
import { DIALOG_OPTIONS_CONTENT, DialogOptionsContent } from '../../models/dialog.model';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
    public title: string = '';
    public users: User[] = [];
    public isLoading: boolean = true;
    public isBusy: boolean = false;
    constructor(
        @Inject(DIALOG_OPTIONS_CONTENT) public options: DialogOptionsContent,
        private usersService: UsersService) {
    }

    public ngOnInit(): void {
        this.title = this.options.title;
        this.usersService.usersObs.subscribe(users => { this.users = users; this.isLoading = false; });
        this.usersService.populateUsers();
    }

    public addRandomUser() {
        this.usersService.addRandomUser();
    }

    public addUser() {

    }

    public ok(): void {
        this.options.close!(true);
    }

    public cancel(): void {
        this.options.close!(false);
    }
}
