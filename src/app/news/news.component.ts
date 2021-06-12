import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from '../services/latest-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles:any;
  constructor(private latestNewsService: LatestNewsService) { }

  ngOnInit(): void {
    if (this.latestNewsService.articles){
      this.articles = this.latestNewsService.articles
    } else {
        this.latestNewsService.getJSON().subscribe(res => {
        this.latestNewsService.articles = res.articles;
        this.articles = res.articles;
      })
    }
  }

}
