import { Injectable } from '@angular/core';
import { Service } from '../shared/service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = "http://localhost:8080/api/service";

  constructor(private http: HttpClient) { }

  getService(id: number) : Observable<any> {
     return this.http.get(`$(this.baseUrl)/${id}`);
  }

  createService(service :Service) : Observable<any>{
    return this.http.post(this.baseUrl,service);
  }

  deleteService(id :number) : Observable<any>{
    console.log("iddd =>"+id);
    return this.http.delete(this.baseUrl+`/${id}`);
  }

  updateService(service: Service) : Observable<any>{
    return this.http.put(`$(this.baseUrl)`,service);
  }

  getServicesList() : Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
