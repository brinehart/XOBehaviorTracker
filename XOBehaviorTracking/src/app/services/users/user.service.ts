import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';
import * as appSettings from "tns-core-modules/application-settings";
import { format, parse, differenceInCalendarISOWeeks } from 'date-fns';
import { SnackBar } from 'nativescript-snackbar';

const firebaseWebApi = require("nativescript-plugin-firebase/app");
var applicationSettings = require("application-settings");

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource = new BehaviorSubject<User>(new User());
  currentUser = this.userSource.asObservable();

  errors: string[];

  constructor() { 
  }

  isValid(): boolean {
    let userId = appSettings.getString("XO_UserId");
    let lastLogin = parse(appSettings.getString("XO_LastLogin"));
    const loginWithinParams = +differenceInCalendarISOWeeks(lastLogin, new Date()) <= 1;
    if (userId && loginWithinParams) {
      return true;
    }
    return false;
  }

  setCurrentUser(currentUser: any, isNew: boolean) {
    if (currentUser) {
      appSettings.setString("XO_UserId", currentUser.uid);
      appSettings.setString("XO_LastLogin", format(new Date()))
      if (isNew) {
        appSettings.setBoolean("XO_IsPaid", false);
      }
    }
  }


  async login(email: string, password: string) {
    this.errors = [];
    await firebaseWebApi.auth().signInWithEmailAndPassword(email, password).then((result) => {
      appSettings.setString("XO_LoginErrors", "");
      this.setCurrentUser(result.user, false);
    }).catch(function (error) {
      appSettings.setString("XO_LoginErrors", error.message);
    });
  }

  async register(email: string, password: string) {
    this.errors = [];
    await firebaseWebApi.auth().createUserWithEmailAndPassword(email, password).then(result => {
      appSettings.setString("XO_LoginErrors", "");
      this.setCurrentUser(result.user, true);
      result.user.sendEmailVerification();
      this.setUserIsPaid(result.user.uid, false);
    }).catch(function (error) {
      appSettings.setString("XO_LoginErrors", error);
    });
  }

  async resetPassword(email: any) {
    await firebaseWebApi.auth().sendPasswordResetEmail(email)
      .catch((error: any) => {
        appSettings.setString("XO_LoginErrors", `Error sending password reset email: ${error}`);
      })
  }

  setUserIsPaid(uid: string, paidStatus: boolean) {
    if (uid && paidStatus) {
      if (paidStatus == true) {
        firebaseWebApi.auth().setCustomUserClaims(uid, { isPaid: paidStatus }).then(() => {
          console.log("Successfully set user.isPaid");
        });
      } else {
        console.error("An error occured while saving the user paid status.")
      }
    }
  }

  async logout() {
    await appSettings.setString("XO_UserId", "");
    await appSettings.setString("XO_LastLogin", "")
    await appSettings.setBoolean("XO_IsPaid", false);
  }
}
