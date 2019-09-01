import { ActionType } from './actionType.model';

export interface IChildAction {
    id: number;
    name: string;
    value: number;
    actionType: ActionType;
}

export class ChildAction implements IChildAction {
    id: number;
    name: string;    
    value: number;
    actionType: ActionType;
}