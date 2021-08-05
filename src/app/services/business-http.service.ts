
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessModel } from '../models/business.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessHttpService {

  constructor(private httpClient: HttpClient) {

  }

  getAll() {
    return this.httpClient.get('');
  }

  getOne(id: number) {
    const url = '' + id;
    return this.httpClient.get(url);
  }

  create(business: BusinessModel) {
    const url = '';
    return this.httpClient.post(url, business);
  }

  update(id: number | undefined, business: BusinessModel) {
    const url = '' + id;
    return this.httpClient.put(url, business);
  }

  delete(id: number | undefined) {
    const url = '' + id;
    return this.httpClient.delete(url);
  }
}