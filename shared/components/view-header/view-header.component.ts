import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-header',
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.scss']
})
export class ViewHeaderComponent implements OnInit {

  @Input() title :string = "";
  @Input() description :string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
