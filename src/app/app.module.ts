import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
