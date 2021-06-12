import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LatestNewsService } from '../services/latest-news.service';



@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
articleId:any;
articles:any[] = [];
article = {
  content :"",
  urlToImage: ""
};

  constructor(private activatedRoute: ActivatedRoute,
    private latestNewsService: LatestNewsService
    ) { }

  ngOnInit(): void {
    this.articleId = this.activatedRoute.snapshot.params['id'];

    if (this.latestNewsService.articles){
      this.articles = this.latestNewsService.articles
      this.article =  this.articles.find(article => article.id == this.articleId)
      
    } else {
        this.latestNewsService.getJSON().subscribe(res => {
        this.latestNewsService.articles = res.articles;
        this.articles = res.articles;
    this.article =  this.articles.find(article => article.id == this.articleId)


      })
    }
  }

}
