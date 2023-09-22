import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actualitee } from '../actualitee';
import { ActualiteeService } from '../actualitee.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {

  actualitees: Actualitee[]=new Array();
  constructor(private actualiteeService: ActualiteeService, private router: Router) {}
  
  
  reloadData() {
     this.actualiteeService.getActualiteesList().subscribe(val=>{
        console.log(val);
        this.actualitees=val;
      });
    }
    ngOnInit() {
      this.reloadData();
      this.actualiteeService.test()
    }
    doSomthing(event)
    {
     setTimeout(()=>{
      this.reloadData();
      this.actualiteeService.test()
     event.target.complete();
     },2000) 
    }



}
