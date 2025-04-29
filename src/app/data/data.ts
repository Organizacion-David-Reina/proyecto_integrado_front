export interface User {
    id: number,
    name: string,
    lastname: string,
    corporateMail: string,
    role: string
}

export interface Credentials {
    corporateMail: string,
    password: string
}