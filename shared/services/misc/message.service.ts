import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) { }

  Success(Message: string,) {
    this.toastr.success(Message, "Success", { tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
  }
  Show(Message: string, Title: string) {
    this.toastr.success(Message, Title, { tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
  }
  Error(Message: string) {
    this.toastr.error(Message, "Error", { tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
  }
}
