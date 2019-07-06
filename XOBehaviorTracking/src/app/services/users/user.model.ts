export interface IUser {
    uid: string;
    anonymous: boolean;
    emailVerified: boolean;
    providers: any;
    displayName: string;
    email: string;
    photoURL: string;
    refreshToken: string;
    additionalUserInfo: any;
    metadata: any;
    isPaid: boolean;
}
export class User implements IUser {
    uid: string;
    anonymous: boolean;
    emailVerified: boolean;
    providers: any;
    displayName: string;
    email: string;
    photoURL: string;
    refreshToken: string;
    additionalUserInfo: any;
    metadata: any;
    isPaid: boolean;
}
