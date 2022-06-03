export enum UserRole {
  USER = 'User',
  ADMIN = 'Admin',
}

export interface User {
  email: string;
  password: string;
  role: UserRole;
}

type Users = User[];
