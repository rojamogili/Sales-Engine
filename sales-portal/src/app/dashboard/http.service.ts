import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getRequest(url: string) {
    return this.http.get(url);
  }

  putRequest(url: string, data: any) {
    return this.http.put(url, data);
  }

  postRequest(url: string, data: any) {
    return this.http.post(url, data);
  }
 
  deleteRequest(url: string, data: any) {
    return this.http.request('delete', url, { body: data});
  }
  
}
