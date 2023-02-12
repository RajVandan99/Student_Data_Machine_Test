import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
logInStatus:boolean = false;
  constructor() { }
isAuthenticated(): Promise<boolean>{
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      this.logInStatus = localStorage.getItem('username')? true : false;
      resolve(this.logInStatus)
    }, 300)
  })
}
getLoggedInStatus(){
  return this.logInStatus;
}
getLogInToApplication(){
  this.logInStatus = true;
}
logOutFromApplication(){
   this.logInStatus = false;
   localStorage.removeItem('username');
}
}
