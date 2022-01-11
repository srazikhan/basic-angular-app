import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

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
  constructor() { }

  ngOnInit(): void {
    this.count = interval(1000);
  }

}
