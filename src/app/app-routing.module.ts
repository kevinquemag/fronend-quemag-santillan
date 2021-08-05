import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoesComponent } from './shoes/shoes.component';
import { TrademarksComponent } from './trademarks/trademarks.component';
import { BusinessComponent } from './business/business.component';
import { ComputerComponent } from './computer/computer.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'shoes',
    component: ShoesComponent
  },
  {
    path: 'trademarks',
    component: TrademarksComponent
  },
  {
    path: 'business', component: BusinessComponent
  },
  {
    path: 'computer', component: ComputerComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
