import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private router: Router) {  }

  ngOnInit(): void {  }
}