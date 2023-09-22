import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Dep } from '../dep';
import { DepService } from '../dep.service';
import { Reclamation } from "../Reclamation";
import { ReclamationsService } from "../reclamations.service";
import { User } from '../user';
@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.scss'],
})
export class ReclamationListComponent implements OnInit {

  reclamations: Reclamation[]=new Array();
  lstservice: Dep[] = []; 
  id!: number;
  user! :User;

  constructor(private reclamationservice: ReclamationsService, private DS: DepService,
    private router: Router) {}

    doSomthing(event)
    {
     setTimeout(()=>{
      this.reloadData();
      this.DS.getServiceList().subscribe((val: Dep[]) => {
        this.lstservice = val;
        console.log(val)
      });
     event.target.complete();
     },2000) 
    }
  reloadData() {
    this.user=JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
   this.reclamationservice.getReclamationsList(this.user.client.id).subscribe(val=>{
      console.log(val);
      this.reclamations=val;
      
    });
  }
  
  ngOnInit() {
    this.reloadData();
    this.DS.getServiceList().subscribe((val: Dep[]) => {
      this.lstservice = val;
      console.log(val)
    });
  
  }
  
}
























