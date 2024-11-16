import { Routes } from '@angular/router';
import { VenderComponent } from './pages/vender/vender.component';
import { HomeComponent } from './pages/home/home.component';
import { dashboardRoutes } from './pages/dashboard/dashboard.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PayComponent } from './pages/pay/pay.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDashComponent } from './pages/user-dash/user-dash.component';
import { userRoutes } from './pages/user-dash/user.routes';
import { PassRecoverComponent } from './pages/pass-recover/pass-recover.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "sell", component: VenderComponent},
    {path: "dash", component: DashboardComponent, children: dashboardRoutes},
    {path: "user", component: UserDashComponent, children: userRoutes},
    {path: "pay", component: PayComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "password-recover", component: PassRecoverComponent},
];
