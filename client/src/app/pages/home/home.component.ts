import { Component, OnInit } from '@angular/core';
import { WhoIsResult } from 'src/app/interfaces/WhoIsResult';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{

  WhoIs: string = "WhoIs";
  SSL: string = "SSL";
  Cookie: string = "Cookie";
  NsLookup: string = "NsLookup";
  AllModes: string = "All";
  UserModes: string[] = [this.NsLookup, this.WhoIs, this.SSL, this.Cookie, this.AllModes];
  CurrentMode: string = "";

  WhoIsResult: WhoIsResult = {} as WhoIsResult;
  CoockiesResult: any;
  CertificateResult: any;
  NsLookupResult: any;

  TargetWebsite: string;

  CertificateToArray: string[] = [];
  WhoIsToArray: string[] = [];
  CookiesArray: string[] = [];
  NsLookupArray: string[] = [];

  constructor(public backendService: BackendService) { }

  ngOnInit(): void
  {
  }

  GetAllInformation()
  {
    this.GetWhoIsInformation();
    this.GetCookies();
    this.GetCertificate();
    this.GetNsLookup();
  }

  async GetWhoIsInformation()
  {
    try {
      this.WhoIsResult = await this.backendService.GetWhoIsInformation(this.TargetWebsite);
      this.WhoIsToArray = this.WhoIsResult.data.split('\\n');
    }
    catch (error) {
      console.log("error");
    }
  }

  async GetCookies()
  {
    try {
      this.CoockiesResult = await this.backendService.GetCookies(this.TargetWebsite);
      this.CookiesArray = this.CoockiesResult.data.split(",");
      console.log(this.CookiesArray);
    }
    catch (error) {
      console.log(error);
    }
  }

  async GetCertificate()
  {
    try {
      this.CertificateResult = await this.backendService.GetCertificate(this.TargetWebsite);
      this.CertificateToArray = this.CertificateResult.data.split('\\n');
    }
    catch (error) {
      console.log(error);
    }
  }

  async GetNsLookup()
  {
    try {
      this.NsLookupResult = await this.backendService.GetNSLookup(this.TargetWebsite);
      this.NsLookupArray = this.NsLookupResult.data.split('\\n');
    }
    catch (error) {
      console.log(error);
    }
  }

}
