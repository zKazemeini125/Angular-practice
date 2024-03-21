import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StarComponent } from "./star/star.component";
import { UserComponent } from './user/user.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { PasswordComponent } from './password/password.component';
import { HomeComponent } from './home/home.component';
import { BgColorDirective } from './directives/bg-color.directive';

@NgModule({
  declarations: [AppComponent, StarComponent, UserComponent, UsersTableComponent, PasswordComponent, HomeComponent, BgColorDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
