export interface User {
    id: bigint,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber?: string,
    gender?: string,
    dateOfBirth?: Date,
    password?: string,
}