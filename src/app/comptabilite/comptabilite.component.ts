import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comptabilite } from '../comptabilite';
import { ComptabiliteService } from '../comptabilite.service';
import { User } from '../user';
@Component({
  selector: 'app-comptabilite',
  templateUrl: './comptabilite.component.html',
  styleUrls: ['./comptabilite.component.scss'],
})
export class ComptabiliteComponent implements OnInit {
  comptabilites: Comptabilite[]=new Array();
  id!: number;
  user! :User;
  constructor(private comptabiliteService: ComptabiliteService, private router: Router) { }
  doSomthing(event)
    {
     setTimeout(()=>{
      this.reloadData();
     event.target.complete();
     },2000) 
    }
  reloadData() {
        this.user=JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    this.comptabiliteService.getComptabilitesList(this.user.client.id).subscribe(val=>{
       console.log(val);
       this.comptabilites=val;
     });
   }
  ngOnInit() {
    this.reloadData();
  }

}
