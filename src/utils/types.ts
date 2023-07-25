export const enum STORAGEKEYS {
  USER = 'user',
}

export interface RegisterFormData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}
export interface ForgotPasswordForm {
  detail: string;
}
