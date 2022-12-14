import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Usuario} from './Usuario';
import {Observable} from "rxjs";

import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: String = environment.apiUrlBase + "/api/usuarios"
  tokenUrl: string = environment.apiUrlBase + environment.obterTokenUrl
  clientID: string = environment.clientId
  clientSecret: string = environment.clientSecret

  constructor(
    private http: HttpClient
  ) {

  }

  salvar(usuario: Usuario) : Observable<any> {
    // @ts-ignore
    return this.http.post<any>(this.apiURL, usuario);
  }

  tentarLogar(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')

    const headers = {
      'Authorization' : 'Basic' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type' : 'application/x-www-form-urlcoded'
    }

    return this.http.post(this.tokenUrl, params.toString(), { headers })

  }

}
