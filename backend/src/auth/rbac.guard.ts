import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role, RolePermissions } from './roles';

@Injectable()
export class RbacGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.get<string[]>('permissions', context.getHandler()) || [];
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user || !user.role) {
      throw new ForbiddenException('User role not found');
    }
    const userPerms = RolePermissions[user.role as Role] || [];
    const hasPermission = requiredPermissions.every(perm => userPerms.includes(perm));
    if (!hasPermission) {
      throw new ForbiddenException('Insufficient permissions');
    }
    return true;
  }
}
