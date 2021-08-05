import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServerResponse } from '../models/server-response';
import { Handler } from '../exceptions/handler';
import { environment } from '../../environments/environment';
import { MessageService } from './message.service';

import { ComputerModel } from '../models/computer.model';
@Injectable({
  providedIn: 'root'
})

export class ComputerHttpService {

  API_URL_AUTHENTICATION: string = environment.API_URL_AUTHENTICATION;
  API_URL_PUBLIC: string = environment.API_URL_PUBLIC;

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<ServerResponse> {
    const url = this.API_URL_AUTHENTICATION + '/computers';
    return this.httpClient.get<ServerResponse>(url)
      .pipe(
        map(response => response),
        catchError(Handler.render)
      );
  }

  getOne(id: number): Observable<ServerResponse> {
    const url = this.API_URL_AUTHENTICATION + '/computers/' + id;
    return this.httpClient.get<ServerResponse>(url)
      .pipe(
        map(response => response),
        catchError(Handler.render)
      );
  }

  store(computer: ComputerModel): Observable<ServerResponse> {
    const url = this.API_URL_AUTHENTICATION + '/computers';
    return this.httpClient.post<ServerResponse>(url, computer)
      .pipe(
        map(response => response),
        catchError(Handler.render)
      );
  }

  update(id: number | undefined, computer: ComputerModel): Observable<ServerResponse> {
    const url = this.API_URL_AUTHENTICATION + '/computers/' + id;
    return this.httpClient.put<ServerResponse>(url, computer)
      .pipe(
        map(response => response),
        catchError(Handler.render)
      );
  }

  delete(id: number | undefined): Observable<ServerResponse> {
    const url = this.API_URL_AUTHENTICATION + '/computers/' + id;
    return this.httpClient.delete<ServerResponse>(url)
      .pipe(
        map(response => response),
        catchError(Handler.render)
      );
  }
}