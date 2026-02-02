
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async save(user: User): Promise<User> {
    return this.userRepo.save(user);
  }

  async create(username: string, passwordHash: string, role: string): Promise<User> {
    if (role === 'super_admin') {
      throw new Error('Super admin creation is restricted to backend only');
    }
    const user = this.userRepo.create({ username, passwordHash, role });
    return this.userRepo.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async findByUsername(username: string): Promise<User | undefined> {
    const user = await this.userRepo.findOne({ where: { username } });
    return user === null ? undefined : user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.userRepo.findOne({ where: { id } });
    return user === null ? undefined : user;
  }

  async setResetToken(username: string, token: string, expiry: Date) {
    await this.userRepo.update({ username }, { resetToken: token, resetTokenExpiry: expiry });
  }

  async findByResetToken(token: string): Promise<User | undefined> {
    const user = await this.userRepo.findOne({ where: { resetToken: token } });
    return user === null ? undefined : user;
  }

  async updatePassword(id: string, passwordHash: string) {
    await this.userRepo.update({ id }, { passwordHash, resetToken: '', resetTokenExpiry: undefined });
  }
}
