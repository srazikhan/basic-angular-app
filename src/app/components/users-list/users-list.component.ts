import { Component, OnInit } from '@angular/core';
import { commonNameSpace } from 'src/app/core/namespaces/commonNameSpace';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  listOfUser:any = commonNameSpace.userList;
  userDetails:any = [{id:1,name:"Nazeer"}];
  countryList:string[] = commonNameSpace.countryList;
  userActivationStatus:boolean = false;
  isActive:boolean = false;
  constructor() { }

  ngOnInit(): void {
    let userObj:myInterface ={
      id:12,
      name:'sajjad'
    }
  }

}

export interface myInterface{
  id:number,
  name:string,
} 
