import { Component, OnInit } from '@angular/core';
import { NewsFeedsService } from '../news-feeds.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  data: any;
  page = 1;
  constructor(private newsService: NewsFeedsService, private router: Router) {}

  ngOnInit() {
    this.newsService
      .getData(
        `everything?q=tesla&from=2021-04-04&sortBy=publishedAt=${
          this.page
        }`
      )
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }
 
}
