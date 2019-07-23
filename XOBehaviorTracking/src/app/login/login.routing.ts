import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import { RegisterComponent } from "../register/register.component";
import { ForgotPasswordComponent } from "../forgot-password/forgot-password.component";

const loginRoutes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent},
    { path: "forgot-password", component: ForgotPasswordComponent}
];
export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);