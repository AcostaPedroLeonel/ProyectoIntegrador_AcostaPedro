import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ArgPrgLogoComponent } from './component/arg-prg-logo/arg-prg-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArgPrgLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
