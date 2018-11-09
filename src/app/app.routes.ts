import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });
