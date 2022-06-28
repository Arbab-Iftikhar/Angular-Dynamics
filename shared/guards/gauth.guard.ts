import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@app/modules/iam/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GAuth implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) { }

  canActivate() {
    if (this.authservice.IsLoggedIn())
      return true
    else {
      this.router.navigate(['auth']);
      return false;
    }
  }

}
