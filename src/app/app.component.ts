import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countryList:string[] = ['India','America']
  title = 'basic-angular-app';

  getCountryList():string{
    return 'Hello'
  }
  
}
