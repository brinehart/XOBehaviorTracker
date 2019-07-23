import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { UserService } from '../services/users/user.service';
import { SnackBar } from 'nativescript-snackbar';
import * as appSettings from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  moduleId: module.id,
})
export class ForgotPasswordComponent implements OnInit {
  public input: any = {
    "email": ""
  };
  animationOn: boolean = true;

  constructor(private userService: UserService,
    private router: RouterExtensions,
    private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.animationOn = false;
  }

  public async sendPasswordReset() {
    if (this.input.email) {
      await this.userService.resetPassword(this.input.email);
      const errors = appSettings.getString("XO_LoginErrors");
      if(errors && errors.length >= 0) {
        (new SnackBar()).simple(`An error occured: ${errors}`);
      } else {
        (new SnackBar()).simple("Please check your email for password reset instructions.");
      }
    } else {
      (new SnackBar()).simple("Please enter an email address!");
    }
  }
  
  public async returnToLogin() {
    this.router.navigate(["/login"], { clearHistory: true });
  }

}
