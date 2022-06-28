import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) { }

  Show(Message: string, Title: string) {
    this.toastr.success(Message, Title, { tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
  }
}
