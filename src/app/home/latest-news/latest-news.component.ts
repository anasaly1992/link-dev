import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from '../../services/latest-news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
articles:any;
size = 6
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
