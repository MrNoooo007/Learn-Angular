export class User {
    constructor(
        public email: string,
        public id: string,
        public _token: string,
        public _tokenExpire: Date
    ) {}

    getToken(): string {
        if(!this._tokenExpire || new Date > this._tokenExpire) {
            return "Token expired"
        }
        return this._token;
    }
}