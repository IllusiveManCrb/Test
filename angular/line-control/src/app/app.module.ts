import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponentComponent } from './components/content-component/content-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    HeaderComponentComponent,
    ContentComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
