import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    save(user: User): Promise<User>;
    create(username: string, passwordHash: string, role: string): Promise<User>;
    findAll(): Promise<User[]>;
    findByUsername(username: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    setResetToken(username: string, token: string, expiry: Date): Promise<void>;
    findByResetToken(token: string): Promise<User | undefined>;
    updatePassword(id: string, passwordHash: string): Promise<void>;
}
