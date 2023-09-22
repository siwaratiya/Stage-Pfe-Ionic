import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poss } from '../poss';
import { PossService } from '../poss.service';
import { User } from '../user';
@Component({
  selector: 'app-poss',
  templateUrl: './poss.component.html',
  styleUrls: ['./poss.component.scss'],
})
export class PossComponent implements OnInit {
  posss: Poss[]=new Array();
  id!: number;
  user! :User;
  constructor(private possService: PossService, private router: Router) { }
  reloadData() {
    this.user=JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    this.possService.getPosssList(this.user.client.id).subscribe(val=>{
       console.log(val);
       this.posss=val;
     });
   }
  ngOnInit() {
    this.reloadData();
  }
  doSomthing(event)
  {
   setTimeout(()=>{
    this.reloadData();
   event.target.complete();
   },2000) 
  }

}
