import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, of, range, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-observable-examples',
  templateUrl: './observable-examples.component.html',
  styleUrls: ['./observable-examples.component.css']
})
export class ObservableExamplesComponent implements OnInit {

  //myObservable:Observable<any> = of(1,2,3,4,5);
  myObservable:Observable<any> = interval(1000);

  constructor(private userService:UserService) {
    
    this.userService.getSubject().subscribe((res:any)=>{
      console.log(res)
    })

  }

  ngOnInit(): void {
    // const myObs = new Observable((observer:any)=>{
    //   observer.next(123);
    //   observer.next(546);
    //   observer.next(875);
    // });
    // myObs.subscribe((res:any)=>{
    //   console.log(res)
    // })
    let userList = [
      {id:1,name:"sajjad"},
      {id:2,name:"Nazeer"},
    ]
    const Obs1 = of(123,124,765,98);
    const Obs2 = from([10,20,50]);
    const Obs3 = interval(1000);
    const Obs4 = range(0,50);

    const userObs = of(userList);
    console.log(userObs)
    userObs.subscribe((res:any)=>{
      console.log(res)
    })

    // Obs1.subscribe((res:any)=>{
    //   console.log(res)
    // })
    Obs3.pipe(take(4)).subscribe((res:any)=>{
      console.log(res)
    })


    //subject example
    
  }
  updateSubject(){
    this.userService.setSubject('Sajjad from hyderabad')
  }

}
