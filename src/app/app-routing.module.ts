import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderResolver } from './loader';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, title: "SpireNet | Home", resolve: { loader: LoaderResolver } },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: NotfoundComponent, title: "Spirenet | Page Not Found", resolve: { loader: LoaderResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
