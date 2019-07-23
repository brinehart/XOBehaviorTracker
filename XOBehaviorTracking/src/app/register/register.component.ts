import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/users/user.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { SnackBar } from "nativescript-snackbar";
import { registerElement } from 'nativescript-angular/element-registry';
import * as appSettings from "tns-core-modules/application-settings";
import { ShadowedLabel } from 'nativescript-shadowed-label';
import { Page } from 'tns-core-modules/ui/page/page';
import { User } from '../services/users/user.model';

@Component({
  selector: 'ns-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  moduleId: module.id,
})
export class RegisterComponent implements OnInit {

  public input: any = {
    "email": "",
    "password": "",
    "confirmPassword": ""
  };
  animationOn: boolean;
  @Input() returnURL: string;
  user: User;

  constructor(private userService: UserService,
    private router: RouterExtensions,
    private page: Page) { }

  ngOnInit() {
    this.animationOn = false;
  }

  public async register() {
    if (this.input.email && this.input.password && this.input.confirmPassword) {
      if (this.input.password == this.input.confirmPassword) {
        await this.userService.register(this.input.email, this.input.password);
        const errors = appSettings.getString("XO_LoginErrors", "");
        if (errors.length <= 0) {
          if (this.returnURL && this.returnURL.length > 0) {
            this.router.navigate([`${this.returnURL}`], { clearHistory: true });
          } else {
            this.router.navigate(["/home"]);
          }
        } else {
          const error = appSettings.getString("XO_LoginError");
          (new SnackBar()).simple(`${error}`);
        }
      }
      else {
        (new SnackBar()).simple("Passwords do not match.");
      }
    } else {
      (new SnackBar()).simple("All Fields Required!");
    } 
    appSettings.setString("XO_LoginError", "");
  }

  public async login() {
    this.router.navigate(["/login"], { clearHistory: true });
  }
}
