import { JwtService } from '@nestjs/jwt';
import { Role } from './roles';
export declare class AuthController {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: import('./user.service').UserService);
    register(body: {
        username: string;
        password: string;
        role: Role;
        email?: string;
    }): Promise<{
        message: string;
    }>;
    updateProfile(body: {
        username: string;
        email?: string;
    }): Promise<{
        message: string;
    }>;
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
        role: string;
    }>;
}
