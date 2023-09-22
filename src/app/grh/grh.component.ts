import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grh } from '../grh';
import { GrhService } from '../grh.service';
import { User } from '../user';

@Component({
  selector: 'app-grh',
  templateUrl: './grh.component.html',
  styleUrls: ['./grh.component.scss'],
})
export class GrhComponent implements OnInit {
  grhs: Grh[] = new Array();
  id!: number;
  user! :User;
  constructor(private grhService: GrhService, private router: Router) { }
  reloadData() {
    this.user=JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    this.grhService.getGrhsList(this.user.client.id).subscribe(val => {
      console.log(val);
      this.grhs = val;
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
