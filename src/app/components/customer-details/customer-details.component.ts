import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  routeData:any;
  constructor(private aRoute:ActivatedRoute) {
    this.aRoute.params.subscribe((res:any)=>{
      console.log(res)
      this.routeData = res;
    })
  }

  ngOnInit(): void {
  }

}
