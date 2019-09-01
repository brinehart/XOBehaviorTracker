import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { appRoutes, authProviders } from "./app.routing";
import { UserService } from "./services/users/user.service";
import { IdentityModule } from "./identity/identity.module";
import { ChildActionsService } from "./services/child-actions/child-actions.service";

@NgModule({
    providers: [UserService, authProviders],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        IdentityModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
