import { Component } from '@angular/core';
import { MetaDataReaderService } from '@app/shared/services/MetaDataReader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  CountersArray!: any[];;
  cols: number = 0;

  constructor(private metaDataService: MetaDataReaderService) {
    this.metaDataService.getFormMetaData("Dashboard").subscribe(item => {
      this.CountersArray = item['Counters'];
      this.cols = (window.innerWidth <= 768) ? 1 : this.CountersArray.length;
    })
  }

  onResize(event: any) {
    this.cols = (event.target.innerWidth <= 768) ? 1 : this.CountersArray.length;
  }
}
