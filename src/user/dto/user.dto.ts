export class CreateUserDTO {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly password: string;
    readonly createdAt: Date;
}