import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderResolver } from './loader';
import { NgToastModule } from 'ng-angular-popup';
import { ToastService } from '@services/toast.service';
import { HttpClientModule } from '@angular/common/http'
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { UsersComponent } from './dashboard/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
    AccountComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale' }),
    NgToastModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    LoaderResolver,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
