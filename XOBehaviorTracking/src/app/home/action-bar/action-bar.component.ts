import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import * as appSettings from 'tns-core-modules/application-settings';
import { UserChild } from '~/app/models/userChild.model';
import { Observable } from 'rxjs';
import { UserChildService } from '~/app/services/user-child/user-child.service';

@Component({
    selector: 'HomeActionBar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.scss'],
    moduleId: module.id
})
export class ActionBarComponent implements OnInit {

    child$: Observable<UserChild>;
    constructor(private userChildService: UserChildService) {}

    ngOnInit() {
      this.child$ = this.userChildService.getChild();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
