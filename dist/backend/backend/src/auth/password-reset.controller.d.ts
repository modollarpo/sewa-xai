import { UserService } from './user.service';
export declare class PasswordResetController {
    private readonly userService;
    constructor(userService: UserService);
    requestReset(body: {
        username: string;
        email?: string;
    }): Promise<{
        message: string;
        token: string | undefined;
    }>;
    resetPassword(body: {
        token: string;
        newPassword: string;
    }): Promise<{
        message: string;
    }>;
}
