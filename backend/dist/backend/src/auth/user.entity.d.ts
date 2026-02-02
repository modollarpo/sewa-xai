export declare class User {
    id: string;
    active: boolean;
    username: string;
    email?: string;
    passwordHash: string;
    role: string;
    resetToken?: string;
    resetTokenExpiry?: Date;
}
