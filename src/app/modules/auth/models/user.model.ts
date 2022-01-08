import { Authentication } from "../interfaces/auth.interface";

export class User {
  id: number;
  name: string;
  email: string;
  email_verified_at: Date;
  created_at: Date;
  updated_at: Date;
  access_token: string;
  token_type: string;
  expires_in: number;

  constructor( init: Partial<User> ) {
    Object.assign( this, init );
  }
}
