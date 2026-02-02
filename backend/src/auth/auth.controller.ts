
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from './roles';
import { hashPassword, comparePassword } from './password.utils';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: import('./user.service').UserService,
  ) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string; role: Role; email?: string }) {
    if (!body.username || !body.password || !body.role) {
      throw new BadRequestException('Missing required fields');
    }
    if (body.role === 'super_admin') {
      throw new BadRequestException('Super admin registration is not allowed');
    }
    const existing = await this.userService.findByUsername(body.username);
    if (existing) {
      throw new BadRequestException('User already exists');
    }
    const passwordHash = await hashPassword(body.password);
    await this.userService.create(body.username, passwordHash, body.role);
    return { message: 'User registered' };
  }

  @Post('update-profile')
  async updateProfile(@Body() body: { username: string; email?: string }) {
    // Only allow updating email for demo
    const user = await this.userService.findByUsername(body.username);
    if (!user) throw new BadRequestException('User not found');
    user.email = body.email;
    await this.userService.save(user);
    return { message: 'Profile updated' };
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.userService.findByUsername(body.username);
    if (!user || !(await comparePassword(body.password, user.passwordHash))) {
      throw new BadRequestException('Invalid credentials');
    }
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      role: user.role,
    };
  }
}
