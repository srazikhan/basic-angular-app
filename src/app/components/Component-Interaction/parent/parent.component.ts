import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message:string = "Hi i am learing angular."
  constructor() { }

  ngOnInit(): void {
  }

}
