import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { PokenComponent } from './components/lp/poken/poken.component';
import { QuickComponent } from './components/lp/quick/quick.component';
import { OrangeComponent } from './components/lp/orange/orange.component';
import { CartagenaComponent } from './components/lp/cartagena/cartagena.component';

const routes: Routes = [
  {path: '', component: ComponentsComponent},
  {path: 'poken', component: PokenComponent},
  {path: 'quick', component: QuickComponent},
  {path: 'orange', component: OrangeComponent},
  {path: 'cartagena', component: CartagenaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
