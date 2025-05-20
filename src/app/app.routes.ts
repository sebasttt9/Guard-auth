import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadComponent: () => import('./pages/auth/auth.page').then(m => m.AuthPage) },
  { path: 'tabs', canActivate: [AuthGuard], loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage) },
];
export const appRouter = provideRouter(routes);
