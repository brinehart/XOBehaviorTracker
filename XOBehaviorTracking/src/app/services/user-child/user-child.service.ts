import { Injectable } from '@angular/core';
import { UserChild } from '~/app/models/userChild.model';

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
    constructor() {}
}
