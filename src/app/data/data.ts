export const AppConfig = {
    apiUrl: 'http://localhost:8080/api/users/administration/'
};

export const roles: Rol[] = [
    { id: 1, rol: 'Director' },
    { id: 2, rol: 'Encargado' },
    { id: 3, rol: 'Trabajador' }
];

export const bonuses: Bonus[] = [
    { id: 1, bondType: 'Bono de 5 clases', price: 55 }, 
    { id: 2, bondType: 'Bono de 8 clases', price: 80 }, 
    { id: 3, bondType: 'Bono de 10 clases', price: 105 }
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
    id?: number,
    rol: string
}

export interface Bonus {
    id?: number,
    bondType: string,
    price: number
}

export interface Student {
    id: number,
    name: string,
    lastname: string,
    nif: string,
    bonus: Bonus
}

export interface Teacher {
    id: number,
    name: string,
    lastname: string,    
    mail: string,
    nif: string
}
