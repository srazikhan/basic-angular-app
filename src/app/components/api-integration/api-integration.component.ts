import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.css']
})
export class ApiIntegrationComponent implements OnInit {
  userList: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    //  const userAPI =  this.httpClient.get('https://reqres.in/api/users?page=2',{});
    //  console.log(userAPI);
    //  userAPI.subscribe((res:any)=>{
    //    console.log(res)
    //  })

    this.httpClient.get('https://reqres.in/api/users?page=2', {}).subscribe((res: any) => {
      console.log(res.data);
      this.userList = res.data;
    })

  }

}
