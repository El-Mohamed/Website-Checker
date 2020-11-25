import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WhoIsResult } from '../interfaces/WhoIsResult';

@Injectable({
  providedIn: 'root'
})
export class BackendService
{
  private requestUrl: string = "http://128.199.42.95:5000/api/";

  constructor(public http: HttpClient) { }

  GetWhoIsInformation(target: string)
  {
    const url = this.requestUrl + 'whois';
    return this.http.get<WhoIsResult>(url).toPromise();
  }

  GetCookies(target: string)
  {
    const url = this.requestUrl + 'cookies';
    return this.http.get<any>(url).toPromise();
  }
}
