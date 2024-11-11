import { Routes } from '@angular/router';
import { VenderComponent } from './pages/vender/vender.component';
import { HomeComponent } from './pages/home/home.component';
import { dashboardRoutes } from './pages/dashboard/dashboard.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PayComponent } from './pages/pay/pay.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "sell", component: VenderComponent},
    {path: "dash", component: DashboardComponent, children: dashboardRoutes},
    {path: "pay", component: PayComponent}
];
