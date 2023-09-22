import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public modalcontroller: ModalController) {}

}

