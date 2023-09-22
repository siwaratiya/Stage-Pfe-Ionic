import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  id!: number;
  client!: Client;
  constructor(private route: ActivatedRoute,private router: Router,
    private clientService: ClientService) {}
    ngOnInit() {
      this.client = new Client();
      var user=JSON.parse(localStorage.getItem('user'));
       this.id = user.client.id; //this.route.snapshot.params['id'];
       
       this.clientService.getClient(this.id)
         .subscribe(data => {
           console.log(data)
           this.client = data;
         }, error => console.log(error));
     }
     doSomthing(event)
     {
      setTimeout(()=>{
       this.client = new Client();
       var user=JSON.parse(localStorage.getItem('user'));
        this.id = user.client.id; //this.route.snapshot.params['id'];
        
        this.clientService.getClient(this.id)
          .subscribe(data => {
            console.log(data)
            this.client = data;
          }, error => console.log(error));
      event.target.complete();
      },2000) 
     }
}
