export interface LoginModel {
  username: string;
  password: string;
}
export interface AuthenticatedResponse {
  token: string;
}

export class FormLogin {
  constructor(
    public userName?: string,
    public password?: string) { }
}
