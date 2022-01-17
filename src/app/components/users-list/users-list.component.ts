import { Component, OnInit } from '@angular/core';
import { commonNameSpace } from 'src/app/core/namespaces/commonNameSpace';
import { action } from 'src/app/core/enums/my-enum';
import { userI } from 'src/app/core/interfaces/userInterface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  // providers:[UserService]
})
export class UsersListComponent implements OnInit {
  listOfUser:any = commonNameSpace.userList;
  userDetails:any = [{id:1,name:"Nazeer"}];
  countryList:string[] = commonNameSpace.countryList;
  userActivationStatus:boolean = false;
  isActive:boolean = false;
  action:any = action.add;
  userList:any;
  constructor(private userService:UserService) {}

  ngOnInit(): void {
    this.showUserData();
  }


  showUserData(){
    this.userList = this.userService.getUserList();
  }

}

// export interface myInterface{
//   id:number,
//   name:string,
// } 
