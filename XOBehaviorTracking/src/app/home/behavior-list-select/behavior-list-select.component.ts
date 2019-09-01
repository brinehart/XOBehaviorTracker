import { Component, OnInit, Input } from '@angular/core';
import * as app from 'tns-core-modules/application';
import * as appSettings from 'tns-core-modules/application-settings';
import { ActionType } from '../../models/actionType.model';
import { ChildAction } from '../../models/childAction.model';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { UserChild } from '~/app/models/userChild.model';
import { Page } from 'tns-core-modules/ui/page/page';
import { ChildActionsService } from '~/app/services/child-actions/child-actions.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { UserChildService } from '~/app/services/user-child/user-child.service';

@Component({
    selector: 'ns-behavior-list-select',
    templateUrl: './behavior-list-select.component.html',
    styleUrls: ['./behavior-list-select.component.scss'],
    moduleId: module.id
})
export class BehaviorListSelectComponent implements OnInit {
    actionType: ActionType;
    childActions: ChildAction[];
    displayedChildActions: Array<string> = [];
    child: UserChild;
    selectedChildActionIndex: number;

    constructor(
        private page: Page,
        private childActionService: ChildActionsService,
        private routerExtensions: RouterExtensions,
        private userChildService: UserChildService
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {
        this.child = this.userChildService.child;
        this.actionType = <ActionType>(
            appSettings.getNumber('currentActionType')
        );
        this.childActions = this.childActionService.childActions;
        this.displayedChildActions = this.getChildActions();
    }

    getChildActions(): string[] {
        let defaultSelection: string[] = ['--Select An Action--'];
        switch (this.actionType) {
            case ActionType.Negative:
                return defaultSelection.concat(
                    this.childActions
                        .filter(a => a.actionType === ActionType.Negative)
                        .map(a => a.name)
                );
            case ActionType.Positive:
                return defaultSelection.concat(
                    this.childActions
                        .filter(a => a.actionType === ActionType.Positive)
                        .map(a => a.name)
                );
        }
    }
    selectedIndexChanged(picker) {
        if (picker && picker.value) {
            let selectedName = this.displayedChildActions[picker.value];
            let selectedAction = this.childActions.filter(
                x => x.name === selectedName
            )[0];
            this.childActionService.setSelectedChildAction(selectedAction);
            this.routerExtensions.navigate(['home/confirm-action'], {
                transition: {
                    name: 'fade'
                }
            });
        }
    }

    onDrawerButtonTap() {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
