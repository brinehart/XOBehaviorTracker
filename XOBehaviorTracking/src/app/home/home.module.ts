import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { BehaviorListSelectComponent } from "./behavior-list-select/behavior-list-select.component";
import { ConfirmActionComponent } from "./confirm-action/confirm-action.component";
import { HomeActionBarComponent } from './action-bar/action-bar.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        BehaviorListSelectComponent,
        ConfirmActionComponent,
        HomeActionBarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
