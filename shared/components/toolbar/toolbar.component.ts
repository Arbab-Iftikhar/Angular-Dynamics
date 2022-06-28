import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/modules/iam/services/auth.service';
import { MessageService } from '@app/shared/services/misc/message.service';
import { AppConstants } from '@shared/app.constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private AuthS: AuthService, private messageS: MessageService, private router: Router) { }

  Organization_Name = AppConstants.Organization_Name

  ngOnInit(): void {
  }
  logout() {
    this.AuthS.Logout();
    this.messageS.Show('Successfully Logged Out', "Logout");
    this.router.navigate(['auth']);
  }

}
