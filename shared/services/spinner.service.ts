import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) { }
  
  IsBusy(state:boolean) {
    if (state == true)
      this.spinner.show();
    else
      this.spinner.hide();
  }
}
