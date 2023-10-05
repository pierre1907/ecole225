import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const USERKEY="user-key";
@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor(
      private route: Router
    ) {
    }
  
    // saveUser(user:Users){
    //   localStorage.setItem(USERKEY,JSON.stringify(user));
    // }
    removeUser(){
      localStorage.removeItem(USERKEY);
    }
  
    // getUser():Users|null{
    //   const user=localStorage.getItem(USERKEY);
    //   //const userTok=localStorage.getItem(TOKEN);
    //   return user?JSON.parse(user):null;
    // }
  
    clearToken(): void {
      localStorage.removeItem('USERKEY');
      this.route.navigate(['/'])
    }
  }