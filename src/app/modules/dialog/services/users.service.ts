import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../models/user.model";
import * as faker from 'faker';

@Injectable()
export class UsersService {
    private users: User[] = [];
    public users$: Subject<User[]> = new Subject<User[]>();

    public get usersObs(){
        return this.users$.asObservable();
    }

    public populateUsers() {
        for (let i = 0; i < 3000; i++) {
            const { firstName, lastName } = this.getRandomUser();
            this.users.push({ firstName, lastName })
        }
        this.users$.next(this.users);
    }

    public getUsers(filter: string) {
        if (filter) {
            this.users$.next(this.users.filter(u => u.firstName.indexOf(filter) > -1 || u.lastName.indexOf(filter) > -1))
        } else {
            this.users$.next(this.users);
        }
    }

    public addNewUser(firstName: string, lastName: string) {
        this.users.unshift({ firstName, lastName });
        this.users$.next(this.users);
    }

    public addRandomUser() {
        const { firstName, lastName } = this.getRandomUser();
        this.users.unshift({ firstName, lastName });
        this.users$.next([...this.users]);
    }

    private getRandomUser(): User {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        return { firstName, lastName }
    }
}