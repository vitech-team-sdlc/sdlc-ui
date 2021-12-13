export interface IAuthForm {
  email: string;
  password: string;
}

export interface ITokenAccess {
  'access_token': string;
  'token_type': string;
  'refresh_token': string;
  'expiry': string;
}
