import { FactModel } from './../models/fact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class FactsService {

    constructor(private httpClient:HttpClient) { }

    public getFactsAsync(url:string):Promise<FactModel>{
      const observable=this.httpClient.get<FactModel>(url);
      return observable.toPromise();
    }
  }