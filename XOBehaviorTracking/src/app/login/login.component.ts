import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/users/user.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { SnackBar } from "nativescript-snackbar";
const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  public input: any = {
    "email": "",
    "password": ""
  };
  
  @Input() returnURL: string;

  public constructor(private userService: UserService, private router: RouterExtensions) { }

  ngOnInit() {
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
  }

  public async login() {
    if (this.input.email && this.input.password) {
      await this.userService.login(this.input.email, this.input.password);
      if (this.userService.errors.length <= 0) {
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

}
