

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { PasswordResetController } from './password-reset.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AdminController } from './admin.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'changeme',
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController, PasswordResetController, AdminController],
  providers: [JwtStrategy, UserService],
  exports: [JwtModule, PassportModule, UserService],
})
export class AuthModule {}
