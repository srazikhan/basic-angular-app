import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('https://reqres.in/api/users?page=2', {})
  }

  createData(formData:any){
    return this.httpClient.post(`https://reqres.in/api/users`,formData, {});
  }

  updateData(formData:any){
    console.log(formData)
    return this.httpClient.put(`https://reqres.in/api/users/${formData.id}`,formData, {});
  }

  deleteData(userId:number){
    return this.httpClient.delete(`https://reqres.in/api/users/${userId}`, {});
  }
}
