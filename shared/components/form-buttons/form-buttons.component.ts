import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.scss']
})
export class FormButtonsComponent implements OnInit, OnDestroy {

  @Input() ButtonsData: any;
  @Input() formvalid: any = false;
  @Input() formshow: any = false;
  @Input() IsSelected: any = false;
  @Input() IsMultiSelected: any = false;

  @Output() onDiscardClick = new EventEmitter();
  @Output() onNewClick = new EventEmitter();
  @Output() onRefreshClick = new EventEmitter();
  @Output() onSaveClick = new EventEmitter();
  @Output() onDeleteClick = new EventEmitter();
  @Output() onEditClick = new EventEmitter();
  @Output() onViewClick = new EventEmitter();

  allowedButtons: string[] = [];

  Dnew: boolean = false;
  Dblock: boolean = true;
  Dedit: boolean = false;
  Dsave: boolean = true;
  Ddelete: boolean = false;
  Drefresh: boolean = false;
  Dview : boolean = false;

  fileData: any;
  constructor() {
    fetch('assets/file/base64_string.txt')
    .then(response => response.text())
    .then(data => {
      // Do something with your data
      this.fileData = data;
    });
 }



  newClick(): void {
    this.Dnew = true;
    this.Dblock = false;
    this.Dsave = false;
    this.Ddelete = true;
    this.Dedit = true;
    this.onNewClick.emit();
  }
  discardClick(): void {
    this.Dnew = false;
    this.Dblock = true;
    this.Dsave = true;
    this.Ddelete = false;
    this.Dedit = false;

    this.onDiscardClick.emit();
  }
  editClick(): void {
    this.Dnew = true;
    this.Dblock = false;
    this.Dsave = false;
    this.Ddelete = true;
    this.Dedit = true;

    this.onEditClick.emit();
  }
  saveClick(): void {
    this.Dnew = false;
    this.Dblock = true;
    this.Dsave = true;
    this.Ddelete = false;
    this.Dedit = false;

    this.onSaveClick.emit();
  }
  refreshClick(): void {
    this.Drefresh = true;
    this.onRefreshClick.emit();
  }
  deleteClick(): void {
    this.onDeleteClick.emit();
  }

  viewClick(): void {
    
    this.onViewClick.emit();
    var byteCharacters = atob(this.fileData);//converting // decoding base64 string in byte chrecters 
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);// pdf document as byte array
    var file = new Blob([byteArray], { type: 'application/pdf' });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  }


  ngOnInit(): void {
    this.allowedButtons = this.ButtonsData;
  }
  ngOnDestroy(): void {
  }
}
