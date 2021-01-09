import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  ButtonPressed: boolean = false;

  // User Modes
  WappalyzerMode: string = "Wappalyzer";
  PingMode: string = "Ping";
  WhoIsMode: string = "Who Is";
  SSLMode: string = "SSL Scan";
  CookieMode: string = "Cookie Scan";
  NsLookupMode: string = "NS Lookup";
  ScraperMode: string = "Scraper";
  AllModes: string = "All";

  UserModes: string[] = [this.AllModes, this.WappalyzerMode, this.PingMode, this.WhoIsMode, this.CookieMode, this.SSLMode, this.NsLookupMode, this.ScraperMode];
  CurrentMode: string = this.AllModes;

  // Results

  WhoIsResult: ApiResult = {} as ApiResult;
  CoockiesResult: ApiResult = {} as ApiResult;
  CertificateResult: ApiResult = {} as ApiResult;
  NsLookupResult: ApiResult = {} as ApiResult;
  ScraperResult: ApiResult = {} as ApiResult;
  PingResult: ApiResult = {} as ApiResult;
  WappAnalyzerResult: ApiResult = {} as ApiResult;
  WappAnalyzerResultParsed: any;


  // Parsed Results

  CertificateToArray: string[] = [];
  WhoIsToArray: string[] = [];
  CookiesArray: string[] = [];
  NsLookupArray: string[] = [];
  PingArray: string[] = [];
  Arrayy: string[] = [];

  // User Input

  TargetWebsite: string;

  constructor(public backendService: BackendService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void
  {
  }

  GetAllInformation()
  {
    this.ButtonPressed = true;
    this.GetWhoIsInformation();
    this.GetCookies();
    this.GetCertificate();
    this.GetNsLookup();
    this.GetScrapedWebsite();
    this.PingWebsite();
    this.GetTechnolgiesFromWebsite();
  }

  async GetWhoIsInformation()
  {
    try {
      this.WhoIsResult = await this.backendService.GetWhoIsInformation(this.TargetWebsite);
      this.WhoIsResult.data = this.WhoIsResult.data.replace("'", "\\");
      this.WhoIsResult.data = this.RemoveAtIndex(this.WhoIsResult.data, 1);
      this.WhoIsResult.data = this.RemoveAtIndex(this.WhoIsResult.data, this.WhoIsResult.data.length);
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
      this.CertificateResult.data = this.CertificateResult.data.replace("'", '');
      this.CertificateResult.data = this.RemoveAtIndex(this.CertificateResult.data, 1);
      this.CertificateResult.data = this.RemoveAtIndex(this.CertificateResult.data, this.CertificateResult.data.length);
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
      this.NsLookupResult.data = this.NsLookupResult.data.replace("'", '');
      this.NsLookupResult.data = this.RemoveAtIndex(this.NsLookupResult.data, 1);
      this.NsLookupResult.data = this.RemoveAtIndex(this.NsLookupResult.data, this.NsLookupResult.data.length);
      this.NsLookupArray = this.NsLookupResult.data.split('\\n');
    }
    catch (error) {
      console.log(error);
    }
  }

  async GetScrapedWebsite()
  {
    try {
      this.ScraperResult = await this.backendService.GetScrapedWebsite(this.TargetWebsite);
      this.ScraperResult.data = this.RemoveAtIndex(this.ScraperResult.data, 1);
      this.ScraperResult.data = this.ScraperResult.data.replace("'", '');
    }
    catch (error) {
      console.log(error);
    }
  }

  async PingWebsite()
  {
    try {
      this.PingResult = await this.backendService.PingWebsite(this.TargetWebsite);
      this.PingResult.data = this.PingResult.data.replace("'", '');
      this.PingResult.data = this.RemoveAtIndex(this.PingResult.data, 1);
      this.PingResult.data = this.RemoveAtIndex(this.PingResult.data, this.PingResult.data.length);
      this.PingArray = this.PingResult.data.split('\\n');
      console.log(this.PingArray);
    }
    catch (error) {
      console.log(error);
    }
  }

  async GetTechnolgiesFromWebsite()
  {
    try {
      this.WappAnalyzerResult = await this.backendService.GetWappAnalyzerResult(this.TargetWebsite);
      this.WappAnalyzerResult.data = this.RemoveAtIndex(this.WappAnalyzerResult.data, 1);
      this.WappAnalyzerResult.data = this.RemoveAtIndex(this.WappAnalyzerResult.data, 1);
      this.WappAnalyzerResult.data = this.RemoveAtIndex(this.WappAnalyzerResult.data, 1);
      this.WappAnalyzerResult.data = this.RemoveAtIndex(this.WappAnalyzerResult.data, this.WappAnalyzerResult.data.length);
      this.WappAnalyzerResult.data = this.RemoveAtIndex(this.WappAnalyzerResult.data, this.WappAnalyzerResult.data.length);
      this.WappAnalyzerResult.data = this.RemoveAtIndex(this.WappAnalyzerResult.data, this.WappAnalyzerResult.data.length);
      this.WappAnalyzerResult.data = this.RemoveAtIndex(this.WappAnalyzerResult.data, this.WappAnalyzerResult.data.length);
      this.WappAnalyzerResult.data = this.RemoveAtIndex(this.WappAnalyzerResult.data, this.WappAnalyzerResult.data.length);
      this.WappAnalyzerResult.data = this.RemoveAtIndex(this.WappAnalyzerResult.data, this.WappAnalyzerResult.data.length);
      this.WappAnalyzerResult.data = this.RemoveAtIndex(this.WappAnalyzerResult.data, this.WappAnalyzerResult.data.length);
      this.WappAnalyzerResult.data = this.RemoveAtIndex(this.WappAnalyzerResult.data, this.WappAnalyzerResult.data.length);
      this.WappAnalyzerResultParsed = JSON.parse(this.WappAnalyzerResult.data);
    } catch (error) {

    }
  }

  RemoveAtIndex(str: string, index: number)
  {
    str = str.substring(0, index - 1) + str.substring(index, str.length);
    return str;
  }

  ShowMessage()
  {
    this._snackBar.open('Copied To Clipboard', '', {
      duration: 1000
    });
  }
}
