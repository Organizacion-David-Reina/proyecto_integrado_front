export const AppConfig = {
    apiUrl: 'http://localhost:8080/api/users/administration/'
};

export const roles: Rol[] = [
    { id: 1, rol: 'Director' },
    { id: 2, rol: 'Encargado' },
    { id: 3, rol: 'Trabajador' }
  ];

export interface User {
    id: number,
    name: string,
    lastname: string,
    role: Rol
}

export interface UserResponse {
    id: number,
    name: string,
    lastname: string,
    corporateMail: string,
    role: Rol
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