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

  WhoIsResult: WhoIsResult = {} as WhoIsResult;
  CoockiesResult: any;
  TargetWebsite: string;

  constructor(public backendService: BackendService) { }

  ngOnInit(): void
  {
  }

  GetAllInformation()
  {
    this.GetWhoIsInformation();
    this.GetCookies();
  }

  async GetWhoIsInformation()
  {
    try {
      this.WhoIsResult = await this.backendService.GetWhoIsInformation('mmcrypto.org');
    }
    catch (error) {
      console.log("error");
    }
  }

  async GetCookies()
  {
    try {
      this.CoockiesResult = this.backendService.GetCookies(this.TargetWebsite);
    }
    catch (error) {
      console.log(error);
    }

  }

}
