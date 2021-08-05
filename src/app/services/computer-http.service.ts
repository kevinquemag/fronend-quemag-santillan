import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputerModel } from '../models/computer.model';
@Injectable({
  providedIn: 'root'
})
export class ComputerHttpService {

  constructor(private httpClient: HttpClient) {

  }

  getAll() {
    return this.httpClient.get('http://backend-quemag-santillan.test/api/v1/authentication/computers');
  }

  getOne(id: number) {
    const url = 'http://backend-quemag-santillan.test/api/v1/authentication/computers/' + id;
    return this.httpClient.get(url);
  }

  create(computer: ComputerModel) {
    const url = 'http://backend-quemag-santillan.test/api/v1/authentication/computers/';
    return this.httpClient.post(url, computer);
  }

  update(id: number | undefined, computer: ComputerModel) {
    const url = 'http://backend-quemag-santillan.test/api/v1/authentication/computers/' + id;
    return this.httpClient.put(url, computer);
  }

  delete(id: number | undefined) {
    const url = 'http://backend-quemag-santillan.test/api/v1/authentication/computers/' + id;
    return this.httpClient.delete(url);
  }
}