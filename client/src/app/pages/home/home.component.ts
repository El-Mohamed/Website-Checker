import { Component, OnInit } from '@angular/core';
// Models
import { ApiResult } from 'src/app/interfaces/WhoIsResult';
// Results
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{

  // User Modes

  WhoIsMode: string = "Who Is";
  SSLMode: string = "Certificate";
  CookieMode: string = "Cookie Scan";
  NsLookupMode: string = "NS Lookup";
  ScraperMode: string = "Scraper";
  AllModes: string = "All";

  UserModes: string[] = [this.AllModes, this.WhoIsMode, this.CookieMode, this.SSLMode, this.NsLookupMode, this.ScraperMode];
  CurrentMode: string = this.AllModes;

  // Results

  WhoIsResult: ApiResult = {} as ApiResult;
  CoockiesResult: ApiResult = {} as ApiResult;
  CertificateResult: ApiResult = {} as ApiResult;
  NsLookupResult: ApiResult = {} as ApiResult;
  ScraperResult: ApiResult = {} as ApiResult;

  // Parsed Results

  CertificateToArray: string[] = [];
  WhoIsToArray: string[] = [];
  CookiesArray: string[] = [];
  NsLookupArray: string[] = [];

  // User Input

  TargetWebsite: string;

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
    this.GetScrapedWebsite();
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
      this.CoockiesResult.data = this.CoockiesResult.data.replace('{', '');
      this.CoockiesResult.data = this.CoockiesResult.data.replace('}', '');
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

  async GetScrapedWebsite()
  {
    try {
      var result = await this.backendService.GetScrapedWebsite(this.TargetWebsite);
      this.ScraperResult = result.data;
    }
    catch (error) {
      console.log(error);
    }
  }
}
