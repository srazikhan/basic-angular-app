import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyApiService } from 'src/app/core/services/my-api.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ApiIntegrationComponent implements OnInit {
  userList: any;
  constructor(private myapi:MyApiService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    //  const userAPI =  this.httpClient.get('https://reqres.in/api/users?page=2',{});
    //  console.log(userAPI);
    //  userAPI.subscribe((res:any)=>{
    //    console.log(res)
    //  })

   this.myapi.getData().subscribe((res: any) => {
      console.log(res.data);
      this.userList = res.data;
    });

  }
  deleteUser(userId:number){
    console.log(userId)
    if(confirm('Are you sure want to delete this record?')){
      this.myapi.deleteData(userId).subscribe((res:any)=>{
        console.log(res)
      })
    }
  }
  updateUser(userObj:any){
    console.log(userObj)
    this.myapi.updateData(userObj).subscribe((res:any)=>{
      console.log(res)
    })
  }
  createUser(){
    const payload:any = {
      name: "morpheus",
      job: "leader"
    }
    this.myapi.createData(payload).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
