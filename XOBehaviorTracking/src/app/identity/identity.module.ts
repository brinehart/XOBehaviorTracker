import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { identityRouting } from "./identity.routing";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        identityRouting
    ],
    declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class IdentityModule {}
