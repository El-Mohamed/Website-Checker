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

  constructor(public backendService: BackendService) { }

  ngOnInit(): void
  {
    this.GetWhoIsInformation();
  }

  async GetWhoIsInformation()
  {
    try {
      this.WhoIsResult = await this.backendService.GetWhoIsInformation('mmcrypto.org');
      console.log(this.WhoIsResult.data);
    }
    catch (err) {
      console.log("error");
    }
  }

}
