export const AppConfig = {
    apiUrl: 'http://localhost:8080/api/users/administration/'
};

export interface User {
    id: number,
    name: string,
    lastname: string,
    role: string
}

export interface Credentials {
    nif: string,
    corporateMail: string,
    password: string
}

export interface UserRequest {
    user: User,
    credentials: Credentials
}

export interface Rol {
    id: number,
    rol: string
}