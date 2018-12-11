import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { ComponentsComponent } from './components/components.component';
import { ProductComponent } from './components/product/product.component';
import { JopsComponent } from './components/jops/jops.component';
import { EventComponent } from './components/event/event.component';
import { MenuComponent } from './menu/menu.component';
import { PokenComponent } from './components/lp/poken/poken.component';
import { HeaderComponent } from './header/header.component';
import { QuickComponent } from './components/lp/quick/quick.component';
import { OrangeComponent } from './components/lp/orange/orange.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ProductComponent,
    JopsComponent,
    EventComponent,
    MenuComponent,
    PokenComponent,
    HeaderComponent,
    QuickComponent,
    OrangeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
