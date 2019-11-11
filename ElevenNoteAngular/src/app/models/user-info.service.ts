// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserInfoService {

//   constructor() { }
// }
export interface UserInfo {
  Email: string;
  HasRegistered: boolean;
  LoginProvider?: any;
}