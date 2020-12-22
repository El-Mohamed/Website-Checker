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
    const url = this.requestUrl + 'whois/' + target;
    return this.http.get<WhoIsResult>(url).toPromise();
  }

  GetCookies(target: string)
  {
    const url = this.requestUrl + 'cookies/' + target;
    return this.http.get<any>(url).toPromise();
  }

  GetCertificate(target: string)
  {
    const url = this.requestUrl + 'certificate/' + target;
    return this.http.get<any>(url).toPromise();
  }

  GetNSLookup(target: string)
  {
    const url = this.requestUrl + 'nslookup/' + target;
    return this.http.get<any>(url).toPromise();
  }
}
