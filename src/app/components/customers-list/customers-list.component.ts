import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToHome(){
    alert('go to home');
    this.router.navigate(['/home']);
  }
}
