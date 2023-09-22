import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import{ NewsComponent } from './news/news.component'
import { AccueilComponent } from './accueil/accueil.component'
import { Chart } from 'chart.js';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FrontgrhComponent } from './frontgrh/frontgrh.component';
import { IntroComponent } from './intro/intro.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ActualitelisteComponent } from './actualiteliste/actualiteliste.component';
import { GrhComponent } from './grh/grh.component';
import { StockComponent } from './stock/stock.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { PossComponent } from './poss/poss.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'reclama',
    component: ReclamationComponent
  },
  {
    path: 'compta',
    component: ComptabiliteComponent
  },
  {
    path: 'insc',
    component: InscriptionComponent
  },
  {
    path: 'auth',
    component: AuthentificationComponent
  },
  {
    path: 'poss',
    component: PossComponent
  },
  {
    path: 'acceuil',
    component: AccueilComponent
  },
  {
    path: 'new',
    component: NewsComponent 
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  
  {
    path: 'front',
    component: FrontgrhComponent
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'intro',
    component: IntroComponent 
  },
  {
    path: 'listrec',
    component: ReclamationListComponent
  },
  {
    path: 'actt',
    component: ActualitelisteComponent
  },
  {
    path: 'grh',
    component: GrhComponent
  },
  {
    path: 'stock',
    component: StockComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
