import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList:any[] =[];
  // myVote = new Subject<any>();
  myVote = new BehaviorSubject<any>(null);
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
  setSubject(data:any){
    this.myVote.next(data);
  }
  getSubject():Observable<any>{
   return this.myVote.asObservable();
  }
  
}
