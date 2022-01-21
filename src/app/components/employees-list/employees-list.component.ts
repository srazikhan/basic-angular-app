import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  userName:string = '';
  myemail:string = "angular pipe example";
  userObj:Object = {id:123,name:'sajjad',email:'sajjad@gmail.com'};
  count!:Observable<any>;
  currentDate:Date = new Date();
  userList:any;
  routeData:any;
  constructor(private userService:UserService,private aRoute:ActivatedRoute) {
    this.userList = this.userService.getUserList();

    this.aRoute.queryParams.subscribe((res:any)=>{
      console.log(res)
      this.routeData = res;
    })
  }

  ngOnInit(): void {
    this.count = interval(1000);
  }

}
