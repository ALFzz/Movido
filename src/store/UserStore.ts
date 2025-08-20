import { makeAutoObservable } from "mobx";

export interface User {
    id: number;
    email: string;
    role: string;
}

export class UserStore {
    private _isAuth: boolean = false;
    private _user: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setIsAuth(isAuth: boolean): void {
        this._isAuth = isAuth;
    }

    setUser(user: User | null): void {
        this._user = user;
    }

    get isAuth(): boolean {
        return this._isAuth;
    }

    get user(): User | null {
        return this._user;
    }
}
