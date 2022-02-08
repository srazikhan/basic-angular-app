import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    // headers = headers.set('paymentStatus','payment is pending');
    // headers = headers.append('testing','Hi Sajjad');
    // console.log(headers.has('Authorization'))
    // console.log(headers.get('Authorization'))
    // console.log(headers.append('testing','Hi Sajjad'))
    // console.log(headers.keys())
    // headers = headers.delete('testing');
    // console.log(headers.keys())
    return this.httpClient.get('https://reqres.in/api/users', {});
  }

  createData(formData:any){
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    // headers = headers.set('paymentStatus','payment is pending');
    // headers = headers.append('testing','Hi Sajjad');
    return this.httpClient.post(`https://reqres.in/api/users`,formData, {});
  }

  updateData(formData:any){
    let params = new HttpParams();
    params = params.set('pageNo','1');
    params = params.set('pageSize','10');
    return this.httpClient.put(`https://reqres.in/api/users/${formData.id}`,formData,{params :params});
  }

  deleteData(userId:number){
    return this.httpClient.delete(`https://reqres.in/api/users/${userId}`, {});
  }
}
