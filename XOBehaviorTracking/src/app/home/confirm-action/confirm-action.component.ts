import { Component, OnInit } from '@angular/core';
import { ChildActionsService } from '~/app/services/child-actions/child-actions.service';
import { ChildAction } from '~/app/models/childAction.model';
import { UserChild } from '~/app/models/userChild.model';
import { UserChildService } from '~/app/services/user-child/user-child.service';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import * as appSettings from 'tns-core-modules/application-settings';
import { ActionType } from '~/app/models/actionType.model';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    selector: 'confirm-action',
    templateUrl: './confirm-action.component.html',
    styleUrls: ['./confirm-action.component.scss']
})
export class ConfirmActionComponent implements OnInit {
    child: UserChild;
    childAction: ChildAction;
    actionType: ActionType;
    constructor(
        private childActionService: ChildActionsService,
        private userChildService: UserChildService,
        private routerExtensions: RouterExtensions
    ) {}

    ngOnInit() {
        this.childAction = this.childActionService.selectedChildAction;
        this.userChildService.child.points += this.childAction.value;
        this.child = this.userChildService.child;
        this.actionType = <ActionType>(
            appSettings.getNumber('currentActionType')
        );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    getChildStatusText(): string {
        return `${this.child.name} ${(this.actionType == ActionType.Positive ? 'earned' : 'lost')} ${this.childAction.value} points for:`
    }
    
    goHome() {
        this.routerExtensions.navigate(['home'], {
            transition: {
                name: 'fade'
            }
        });
    }
}