export class User {
    constructor(
        public readonly email: string,
        public  password: string,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly age: number,
        public readonly phone: string,
        public readonly gender?: string,
        public readonly _id?: string,

    ){}
}