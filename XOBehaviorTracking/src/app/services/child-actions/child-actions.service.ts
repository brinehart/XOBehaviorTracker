import { Injectable, OnDestroy } from '@angular/core';
import { ChildAction } from '~/app/models/childAction.model';
import { ActionType } from '~/app/models/actionType.model';

@Injectable({
    providedIn: 'root'
})
export class ChildActionsService {
    public selectedChildAction = new ChildAction();
    public childActions: ChildAction[] = [
        {
            id: 1,
            name: 'Hitting Sibling',
            value: -3,
            actionType: ActionType.Negative
        },
        {
            id: 2,
            name: 'Biting Sibling',
            value: -5,
            actionType: ActionType.Negative
        },
        {
            id: 3,
            name: 'Spitting Out Food At Dinner',
            value: -1,
            actionType: ActionType.Negative
        },
        {
            id: 4,
            name: 'Hugging Sibling',
            value: 3,
            actionType: ActionType.Positive
        },
        {
            id: 5,
            name: 'Finishing Homework Without Complaining',
            value: 5,
            actionType: ActionType.Positive
        },
        {
            id: 6,
            name: 'Eating all Vegetables At Dinner',
            value: 1,
            actionType: ActionType.Positive
        }
    ];
    constructor() {}

    setSelectedChildAction(childAction: ChildAction) {
        if (childAction) {
            this.selectedChildAction = childAction;
        }
    }
}