import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NewsComponent } from './news/news.component';
import { AccueilComponent } from './accueil/accueil.component'
import { HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';
import { FrontgrhComponent } from './frontgrh/frontgrh.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IntroComponent } from './intro/intro.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ActualitelisteComponent } from './actualiteliste/actualiteliste.component';
import { GrhComponent } from './grh/grh.component';
import { StockComponent } from './stock/stock.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { PossComponent } from './poss/poss.component';
@NgModule({
  declarations: [ AppComponent,PossComponent, ReclamationComponent,InscriptionComponent,AuthentificationComponent,NewsComponent,AccueilComponent,FrontgrhComponent,IntroComponent,ReclamationListComponent,ActualitelisteComponent,GrhComponent,StockComponent,ComptabiliteComponent],
  entryComponents: [],
  imports: [ReactiveFormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
