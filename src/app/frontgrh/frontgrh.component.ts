 import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
 import { Chart , registerables} from 'chart.js';
import { Subscription } from 'rxjs';
import { ComptabiliteService } from '../comptabilite.service';
import { GrhService } from '../grh.service';
import { PossService } from '../poss.service';
import { StockService } from '../stock.service';
import { User } from '../user';
 Chart.register(...registerables);
  @Component({
    selector: 'app-frontgrh',
    templateUrl: './frontgrh.component.html',
    styleUrls: ['./frontgrh.component.scss'],
  })
 
  export class FrontgrhComponent implements AfterViewInit {
    @ViewChild('barCanvas') private barCanvas: ElementRef;
    @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
    @ViewChild('lineCanvas') private lineCanvas: ElementRef;
    @ViewChild('barCanvas2') private barCanvas2: ElementRef;
    barChart2:any;
    barChart: any;
    doughnutChart: any;
    lineChart: any;
  sub:Subscription
  sub2:Subscription
    constructor(private comp:ComptabiliteService,private poss:PossService,private stock:StockService,private grh:GrhService) { }
  //user=null;
  id!: number;
  user! :User;
       tab1=[]
       tab2=[]
       tab3=[]
       tab4=[]
       tab5=[]
       tab6=[]
       tab7=[]
       tab8=[]
    ngAfterViewInit() {
      
     this.user=JSON.parse(localStorage.getItem("user"));
     console.log(this.user);
     this.comp.getComptabilitesList(this.user.client.id).subscribe(val=>{
      var table=[]
      table=val;
        console.log(val)
     
      for (let i = 0; i < table.length; i++) {
       var data=table[i].date_facture;
       if(table[i].etat_facture!="no payé"){
 var sum = 1
       }else{
 var sum = 0
       }
       
        for (let j = i+1; j < table.length; j++) {
          if(table[i].date_facture==table[j].date_facture){
             if(table[i].etat_facture!="no payé"){
  sum ++
       }
       
            table.splice(j,1);
          }
          
        }
        this.tab7.push(data);
        this.tab8.push(sum);
      }
      this.Compatibilitebarchart(this.tab7,this.tab8);

     })
      
    this.sub=  this.poss.getPosssList(this.user.client.id).subscribe(val=>{
      console.log(val)
      var table=[]
      table=val;
        
     
      for (let i = 0; i < table.length; i++) {
       var data=table[i].date_caisse;
        var sum = val[i].recette_apres_midi+table[i].recette_matin;
        for (let j = i+1; j < table.length; j++) {
          if(table[i].date_caisse==table[j].date_caisse){
             sum+=table[j].recette_apres_midi+table[j].recette_matin;
            table.splice(j,1);
          }
          
        }
        this.tab1.push(data);
        this.tab2.push(sum);
      }
     

      })
     this.sub2=this.stock.getStocksList(this.user.client.id).subscribe(val=>{
       console.log(val)
       var table=[]
       table=val;
       for (let i = 0; i < table.length; i++) {
        var data=table[i].date_arrivage;
         var sum = table[i].qnt_produit;
         for (let j = i+1; j < table.length; j++) {
           if(table[i].date_arrivage==table[j].date_arrivage){
              sum+=table[j].qnt_produit;
             table.splice(j,1);
           }
           
         }
         this.tab3.push(data);
         this.tab4.push(sum);
       }
       this.lineChartMethod(this.tab3,this.tab4);
     })
    
      this.barChartMethod(this.tab1,this.tab2);
      this.grh.getGrhsList(this.user.client.id).subscribe(val=>{
        console.log(val)
        var table=[]
        table=val;
        for (let i = 0; i < table.length; i++) {
         var data=table[i].salaire;
          var sum =1;
          for (let j = i+1; j < table.length; j++) {
            if(table[i].salaire==table[j].salaire){
               sum++;
              table.splice(j,1);
            }
            
          }
           this.tab5.push(data);
         this. tab6.push(sum);
        }
         
           this.doughnutChartMethod(this.tab5,this.tab6);
      });
     
      
      
    }
    ionViewWillEnter(){

      setInterval(() => {
        this.sub.unsubscribe();
        this.user=JSON.parse(localStorage.getItem("user"));
        console.log(this.user);
     
  
    var tab1=[]
    var tab2=[]
   this.sub= this.poss.getPosssList(this.user.client.id).subscribe(val=>{
       var table=[]
       table=val;      
       for (let i = 0; i < table.length; i++) {
        var data=table[i].date_caisse;
         var sum = val[i].recette_apres_midi+table[i].recette_matin;
         for (let j = i+1; j < table.length; j++) {
           if(table[i].date_caisse==table[j].date_caisse){
              sum+=table[j].recette_apres_midi+table[j].recette_matin;
             table.splice(j,1);
           }
           
         }
         tab1.push(data);
         tab2.push(sum);
       }
      /* tab1.push('2010-01-22');
       tab2.push(1588);*/
       if(tab1!=this.tab1 || tab2!=this.tab2){
         this.tab1=tab1;
         this.tab2=tab2;
        this.barChart.destroy();
        this.barChartMethod(this.tab1,this.tab2)
       }
      
       });
        
      }, 5000);
    }
    refresh(){
    
    
    ///GUTEN NACHT :|
   }
   Compatibilitebarchart(tab1,tab2) {
    this.barChart2 = new Chart(this.barCanvas2.nativeElement, {
      type: 'bar', 
      data: {
        labels: tab1,
        datasets: [{
          label: ' Payé',
          data: tab2,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
              beginAtZero: true
            }          
        }
      }
    });
   
  }
  barChartMethod(tab1,tab2) {
      this.barChart = new Chart(this.barCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: tab1,
          datasets: [{
            label: ' TND',
            data: tab2,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
                beginAtZero: true
              }          
          }
        }
      });
     
    }
  
    doughnutChartMethod(tab1,tab2) {
      console.log(tab2)
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: tab1,
          datasets: [{
            label: '# of Votes',
            data: tab2,
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            hoverBackgroundColor: [
              '#FFCE56',
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#FF6384'
            ]
          }]
        }
      });
    }
  
    lineChartMethod(tab1,tab2) {
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: tab1,
          datasets: [
            {
              label: 'Quantite',
              fill: false,
              //lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: tab2,
              spanGaps: false,
            }
          ]
        }
      });
    }
  }