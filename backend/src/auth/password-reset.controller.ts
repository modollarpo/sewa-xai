import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { hashPassword } from './password.utils';
import { v4 as uuidv4 } from 'uuid';
import { sendEmail } from '../utils/email.service';

@Controller('auth')
export class PasswordResetController {
  constructor(private readonly userService: UserService) {}

  @Post('request-reset')
  async requestReset(@Body() body: { username: string; email?: string }) {
    const user = await this.userService.findByUsername(body.username);
    if (!user) throw new BadRequestException('User not found');
    const token = uuidv4();
    const expiry = new Date(Date.now() + 1000 * 60 * 30); // 30 min expiry
    await this.userService.setResetToken(user.username, token, expiry);
    // Send token via email (if user has email)
    const emailToSend = (typeof user.email === 'string' && user.email) ? user.email : (typeof body.email === 'string' ? body.email : undefined);
    if (emailToSend) {
      await sendEmail(emailToSend, 'SEWA Password Reset', `Your password reset token: ${token}`);
    }
    return { message: 'Password reset requested', token: process.env.NODE_ENV === 'development' ? token : undefined };
  }

  @Post('reset-password')
  async resetPassword(@Body() body: { token: string; newPassword: string }) {
    const user = await this.userService.findByResetToken(body.token);
    if (!user || !user.resetTokenExpiry || user.resetTokenExpiry < new Date()) {
      throw new BadRequestException('Invalid or expired token');
    }
    const passwordHash = await hashPassword(body.newPassword);
    await this.userService.updatePassword(user.id, passwordHash);
    return { message: 'Password reset successful' };
  }
}
