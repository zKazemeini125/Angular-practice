import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { RepeaterDirective } from './repeater.directive';
import { BoxDirective } from './box.directive';

@NgModule({
  declarations: [AppComponent, ClassDirective, RepeaterDirective, BoxDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
