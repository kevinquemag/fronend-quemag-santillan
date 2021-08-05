import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


//PrimeNg MOdules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

//demas
import { ShoesComponent } from './shoes/shoes.component';
import { TrademarksComponent } from './trademarks/trademarks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';
import { ComputerComponent } from './computer/computer.component';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoesComponent,
    TrademarksComponent,
    NotFoundComponent,
    MainComponent,
    AccessDeniedComponent,
    UnderMaintenanceComponent,
    ComputerComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
