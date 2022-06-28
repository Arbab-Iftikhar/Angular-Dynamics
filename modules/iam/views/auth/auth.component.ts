import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@iam/services/auth.service';

import { User } from '@iam/models/user';
import { IamModuleURL } from '@iam/iam.url.module';
import { AppConstants } from '@shared/app.constants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, private _AuthService: AuthService) { }

  App_Name:string = AppConstants.App_Name


  ngOnInit(): void {
    this.FormSwitcher()
  }
  FormSwitcher() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn!.addEventListener("click", () => {
      container!.classList.add("sign-up-mode");
    });

    sign_in_btn!.addEventListener("click", () => {
      container!.classList.remove("sign-up-mode");
    });
  }
  // ---------------------------- Login Form Start --------------------------------

  LoginFrom = new FormGroup({                                 ///Login Reactive Form
    Username: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required])
  });
  /// Form Validation
  started_Login_Username: boolean = false;
  started_Login_Password: boolean = false;

  get Login_Username() { return this.LoginFrom.get("Username") }
  get Login_Password() { return this.LoginFrom.get("Password") }

  start_validaiton_Login_Form(name: string) {
    if (name == "Username")
      this.started_Login_Username = true;
    else
      this.started_Login_Password = true;
  }
  
  ///Submit Login Form
  Login() {
    let User: User = {
      Username: this.LoginFrom.get("Username")?.value,
      Password: this.LoginFrom.get("Password")?.value
    }

    let response = this._AuthService.Loginin(User);
    if (response) {
      this.router.navigate([IamModuleURL.Dashboard_url]);
      this.toastr.success("Successfully Logged In", "Success", { tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
    else {
      this.toastr.error("Email or Password is Incorrect", "Incorrect", { tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }
  // -------------------------------Login Form End -----------------------------------

  // ---------------------------- Register Form Start --------------------------------

  RegisterFrom = new FormGroup({            // Register Reactive Form
    Register_Username: new FormControl('', [Validators.required]),
    Register_Email: new FormControl('', [Validators.required, Validators.email]),
    Register_Password: new FormControl('', [Validators.required])
  });

  started_Register_Username: boolean = false;
  started_Register_Email: boolean = false;
  started_Register_Password: boolean = false;
  // Register Form Validation
  start_validaiton_Register_Form(name: string) {
    if (name == "Register_Username")
      this.started_Register_Username = true;
    if (name == "Register_Email")
      this.started_Register_Email = true;
    if (name == "Register_Password")
      this.started_Register_Password = true;
  }
  get Register_Username() { return this.RegisterFrom.get("Register_Username") }
  get Register_Email() { return this.RegisterFrom.get("Register_Email") }
  get Register_Password() { return this.RegisterFrom.get("Register_Password") }
  Register() {
    let User: User = {
      Username: this.RegisterFrom.get("Register_Username")?.value,
      Email: this.RegisterFrom.get("Register_Email")?.value,
      Password: this.RegisterFrom.get("Register_Password")?.value
    }
    let response = this._AuthService.Register(User);
    if (response) {
      this.toastr.success("Successfully Registered", "Success", { tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
      this.router.navigate([IamModuleURL.Dashboard_url]);
    }
    else {
      this.toastr.error("Something went wrong", "Error", { tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }
}
