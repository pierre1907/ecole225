
export class User {
    id?:number;
    nom?:string;
    prenom?:string;
    lastName?:string;
    firstName?:string;
    email?:string;
    username?:string;
    password?:string;
    passwordR?:string;
    phone?: string;
    // role?: Role= new Role();
    // roles?: Role[];
    avatar?:string;
    oldPassword?: string;
    newPassword?: string;
    newPasswordRepeat?: string;
    //passwordRepeat?: string;
    token?:string;
    active?: boolean;
  }
