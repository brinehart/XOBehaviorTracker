import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as appSettings from 'tns-core-modules/application-settings';
import { UserChild } from "../../models/userChild.model";
import { ActionType } from "../../models/actionType.model";
import { UserChildService } from "~/app/services/user-child/user-child.service";
import { Observable } from "rxjs";

@Component({
    selector: 'Home',
    moduleId: module.id,
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    public selectedIndex = 1;
    public xClass: string;
    public oClass: string;

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onXTap() {
        this.xClass = 'animate';
        const enumValue = ActionType["Negative"];
        this.navigateToBehaviorListSelect(enumValue);
    }

    onOTap() {
        this.oClass = 'animate';
        const enumValue = ActionType['Positive'];
        this.navigateToBehaviorListSelect(enumValue);
    }

    private navigateToBehaviorListSelect(enumValue: ActionType) {
        appSettings.setNumber('currentActionType', enumValue);
        this.routerExtensions.navigate(['home/behavior-list-select'], {
            transition: {
                name: 'fade'
            }
        });
    }
}
