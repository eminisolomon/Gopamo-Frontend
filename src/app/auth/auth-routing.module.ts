import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LoaderResolver } from '../loader';

const routes: Routes = [
  { path: 'signin', component: SigninComponent, resolve: { loader: LoaderResolver } },
  { path: 'signup', component: SignupComponent, resolve: { loader: LoaderResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
