import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/users/user.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { SnackBar } from "nativescript-snackbar";
import { registerElement } from 'nativescript-angular/element-registry';
import * as appSettings from "tns-core-modules/application-settings";
import { ShadowedLabel } from 'nativescript-shadowed-label';
import { Page } from 'tns-core-modules/ui/page/page';
import { User } from '../../services/users/user.model';
registerElement('ShadowedLabel', () => ShadowedLabel);
const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  public input: any = {
    "email": "",
    "password": ""
  };
  inputClasses: string = '';

  @Input() returnURL: string;
  user: User;
  animationOn: boolean = true;

  public constructor(private userService: UserService, 
    private router: RouterExtensions, 
    private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    if(!firebase){
      firebase.init({
        iOSEmulatorFlush: true
      }).then(() => {
        console.log("firebase.init done");
      }), (error: any) => {
        console.log(`firebase.init error ${error}`)
      }
    }
    if (this.userService.isValid()) {
      if (this.returnURL.length > 0) {
        this.router.navigate([`${this.returnURL}`]);
      } else {
        this.router.navigate(["/home"]);
      }
    }
    this.animationOn = false;
  }

  public async login() {
    if (this.input.email && this.input.password) {
      await this.userService.login(this.input.email, this.input.password);
      const errors = appSettings.getString("XO_LoginErrors");
      if (errors.length <= 0) {
        if (this.returnURL && this.returnURL.length > 0) {
          this.router.navigate([`${this.returnURL}`], { clearHistory: true });
        } else {
          this.router.navigate(["/home"]);
        }
      } else {
        (new SnackBar()).simple("Incorrect Credentials!");
      }
    } else {
      (new SnackBar()).simple("All Fields Required!");
    }
  }
  
  public async register() {
    this.router.navigate(["/register"], { clearHistory: true });
  }

  public async forgotPassword() {
    this.router.navigate(["/forgot-password"], { clearHistory: true })
  }
}
