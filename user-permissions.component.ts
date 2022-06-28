import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.scss']
})
export class UserPermissionsComponent implements OnInit {
  formTitle = "Permissions Manager";
  fieldsetDisabled = true;
  constructor() { }

  ngOnInit(): void {
  
  }
  onAdd(){
    this.fieldsetDisabled=false;
  }

}
