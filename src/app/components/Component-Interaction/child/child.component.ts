import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnChanges{
  @Input() myMSG!:string;
  @Output() messageFromChild:any = new EventEmitter<any>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes.myMSG.currentValue)
      console.log(changes.myMSG)
  }

  ngOnInit(): void {
    setTimeout(()=>{
      console.log("setTimeout is executed")
    },3000)
  }
  sendData(inputValue:any){
    console.log('method called'+inputValue);
    this.messageFromChild.emit(inputValue);
    }

}
