import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit ,AfterViewInit,AfterViewChecked,OnDestroy{
  message:string = "Hi i am learing angular."
  dataFromChild:any;
  constructor() { 
    console.log("constructor is called");
  }

  ngOnInit(): void {
    console.log("ngOnInit is called");
    localStorage.setItem('token','hjgasdkjhgaKJGadgAGKJGah');
  }
  receiveData(event:any){
    console.log(event);
    this.dataFromChild = event;
  }
  ngAfterViewInit(): void {
      console.log("ngAfterViewInit is called");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked is called");
  }
  ngOnDestroy(): void {
      console.log("ngOnDestroy is called");
      localStorage.clear();
  }
}
