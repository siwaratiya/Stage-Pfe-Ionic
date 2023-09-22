import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { User } from '../user';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {

  stocks: Stock[]=new Array();
  id!: number;
  user! :User;
  constructor(private stockService: StockService, private router: Router) {}
  reloadData() {
    this.user=JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
     this.stockService.getStocksList(this.user.client.id).subscribe(val=>{
        console.log(val);
        this.stocks=val;
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
