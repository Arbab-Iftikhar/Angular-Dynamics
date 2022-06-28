import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pmain',
  templateUrl: './pmain.component.html',
  styleUrls: ['./pmain.component.scss']
})
export class PMainComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  formid: any | undefined;
  ngOnInit(): void {
    this.route.params.subscribe((item: any) => {
      this.formid = item.id;
    });
  }

}
