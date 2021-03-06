import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList:string[] = ['Apple','Mango','Orange'];
  updatedProductList:string[] = [];
  isActive:boolean = true;
  isDisplay:boolean = false
  message:string = 'Hi I am angular developer'
  imageURL:string = '';

  constructor() { 
    setTimeout(() => {
      this.isActive = false
    }, 3000);
  }

  ngOnInit(): void {}

  showImage(){
    this.imageURL = 'https://static.digit.in/product/284c81498a93a82db7b5db6600494c20bee4f18e.jpeg';
    this.productList.push('Nazeer');
    this.productList.push('Javascript');
    this.updatedProductList = this.productList;
    this.isDisplay = true;
  }

  showMSG(){
    alert('HI am alert')
  }
}
