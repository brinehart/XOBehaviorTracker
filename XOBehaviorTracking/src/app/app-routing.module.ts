import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginGuard } from "./guards/login.guard";
import { LoginComponent } from "./identity/login/login.component";
import { RegisterComponent } from "./identity/register/register.component";
import { ForgotPasswordComponent } from "./identity/forgot-password/forgot-password.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full", canActivate: [ LoginGuard ]},
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent},
    { path: "forgot-password", component: ForgotPasswordComponent},
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
