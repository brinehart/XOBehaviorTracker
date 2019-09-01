export interface IUserChild {
    uid: string;
    childId: string;
    name: string;
    age: number;
    birthday: Date;
    photo: string;
    points: number;
}
export class UserChild implements IUserChild {
    uid: string;    
    childId: string;
    name: string;
    age: number;
    birthday: Date;
    photo: string;
    points: number;
}
