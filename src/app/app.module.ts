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
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ProductComponent,
    JopsComponent,
    EventComponent,
    MenuComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
