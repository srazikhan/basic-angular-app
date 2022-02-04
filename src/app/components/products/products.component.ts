import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:string[] =['laptop','computer'];
  isShow:boolean = true;
  productDetails:any;
  constructor(private DomSanitizer:DomSanitizer) { 
    let details:any = `
    <h2></hello></h2>`;
    this.productDetails = this.DomSanitizer.bypassSecurityTrustHtml(details);
    console.log(this.productDetails)
  }

  ngOnInit(): void {
   
  }

}
