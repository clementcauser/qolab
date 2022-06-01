import { UserRole } from '@qolab/users';

export interface JwtToken {
  sub: string;
  email: string;
  roles: [UserRole];
  iat: number;
  exp: number;
}
