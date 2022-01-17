import { Injectable } from '@angular/core';

// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList:any[] =[];
  constructor() { 
    this.userList = [
      {id:1,name:"sajjad",email:"sajjad@gmail.com"},
      {id:2,name:"Vikash",email:"vikash@gmail.com"},
      {id:3,name:"Nazeer",email:"nazeer@gmail.com"},
      {id:4,name:"Ramesh",email:"ramesh@gmail.com"},
    ]
  }

  getUserList(){
    return this.userList;
  }
  
}
