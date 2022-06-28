import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { SpinnerService } from './spinner.service';

@Injectable()
export class MiscService {

    constructor(private message: MessageService, private spinnerService: SpinnerService) { }

    showLoader(): void {
        this.spinnerService.IsBusy(true);
    }

    hideLoader(): void {
        this.spinnerService.IsBusy(false);
    }

    handleSuccess(message: string): void {
        this.message.Success(message);
    }

    handleError(message?: string): void {
        this.message.Error(message === undefined ? 'An Error Occured' : message);
    }
}
