import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginGuard } from "../guards/login.guard";
import { BehaviorListSelectComponent } from "./behavior-list-select/behavior-list-select.component";
import { ConfirmActionComponent } from "./confirm-action/confirm-action.component";

const routes: Routes = [
    { path: "", component: HomeComponent, canActivate: [ LoginGuard ] },
    { path: "behavior-list-select", component: BehaviorListSelectComponent, canActivate: [LoginGuard]},
    { path: "confirm-action", component: ConfirmActionComponent, canActivate: [LoginGuard]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
