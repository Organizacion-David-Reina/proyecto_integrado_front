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

export const levels: string[] = [
    "Inicial",
    "Intermedio",
    "Avanzado"
];

export interface User {
    id: number,
    name: string,
    lastname: string,
    phoneNumber: string,
    address: string,
    dayOfBirth: string | Date,
    role: Rol
}

export interface UserResponse {
    id: number,
    name: string,
    lastname: string,
    corporateMail: string,
    phoneNumber: string,
    address: string,
    dayOfBirth: string | Date,
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
    phoneNumber: string,
    address: string,
    dayOfBirth: string | Date,
    bonus: Bonus,
    mail: string
}

export interface Teacher {
    id: number,
    name: string,
    lastname: string,    
    mail: string,
    nif: string,
    phoneNumber: string,
    address: string,
    dayOfBirth: string | Date,
}


export interface Room {
    id: number,
    capacity: number,
    roomName: string
}

export interface Style {
    id: number,
    style: string
}

export interface Class {
    id: number,
    style: Style,
    teacher: Teacher,
    room: Room,
    reservations: number,
    level: string,
    day: Date,
    startTime: string,
    endTime: string,
}

export interface ReservationRequest {
    classId: number,
    studentNif: string
}
