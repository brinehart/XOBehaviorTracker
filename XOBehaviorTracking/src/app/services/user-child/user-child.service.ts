import { Injectable } from '@angular/core';
import { UserChild } from '~/app/models/userChild.model';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { throws } from 'assert';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserChildService {

    public child: UserChild = {
        uid: '293539254imgtnb82009mh490549mb',
        childId: 'w24jr3429y54yj945',
        name: 'John',
        age: 8,
        birthday: new Date('2011-01-16'),
        photo: '',
        points: 8
    };
    private childSource = new BehaviorSubject<UserChild>(this.child);
    selectedChild = this.childSource.asObservable();
    
    getChild(): Observable<UserChild> {
        return this.selectedChild;
    }

    switchChildren(uid: string) {
        let newChild = this.children.find(x => x.uid === uid);
        this.childSource.next(newChild);
    }

    public updateChildPoints(points: number) {
        this.getChild().pipe(
            map(child => {
                let updatedChild = {...child};
                updatedChild.points += points;
                this.childSource.next(updatedChild);
            })
        );
    }
    public children: UserChild[] = [
        {
            uid: '19718b7e-e38e-4ea3-b676-0d2a3c092e3d',
            childId: 'w24jr3429y54yj945',
            name: 'John',
            age: 8,
            birthday: new Date('2011-01-16'),
            photo:
                'http://icons.iconarchive.com/icons/google/noto-emoji-people-face/128/10131-child-medium-skin-tone-icon.png',
            points: 8
        },
        {
            uid: 'd9f8b110-d820-484c-992a-9cfd84a69dbb',
            childId: '11672a38-7772-4c2a-a8a5-b408d2170498',
            name: 'Vince',
            age: 7,
            birthday: new Date('2012-01-16'),
            photo:
                'http://icons.iconarchive.com/icons/google/noto-emoji-people-face/128/10128-child-icon.png',
            points: 8
        },
        {
            uid: 'dfe9524f-4810-44be-9e26-b2f06f2b033e',
            childId: 'a1bc82bd-5b0b-4286-a207-6711d2cc3e44',
            name: 'David',
            age: 2,
            birthday: new Date('2017-01-16'),
            photo:
                'http://icons.iconarchive.com/icons/google/noto-emoji-people-face/128/10130-child-medium-light-skin-tone-icon.png',
            points: 8
        }
    ];
    constructor() {}
}
