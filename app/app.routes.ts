import { Routes } from '@angular/router';
import { authGaurdGuard } from './cores/auth/gaurds/auth-gaurd-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'dash', pathMatch: 'full' },
    {
        path: 'dash', loadChildren: () =>
            import('./main/dashboard/dashboard-routing-module').then(
                (m) => m.DashboardRoutingModule
            ), canActivate: [authGaurdGuard]
    }
];
