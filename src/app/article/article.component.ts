import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticlesService } from '../articles.service';
import { Article, displayDate } from 'app/models/article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticlesService]
})
export class ArticleComponent implements OnInit {

  articleToDisplay;
  date: string;

  constructor(private route: ActivatedRoute, private location: Location, private articlesService: ArticlesService) {}

  ngOnInit() {
    let articleId: string;
    this.route.params.forEach((urlParameters)=> {

    articleId = urlParameters['id'];
    });
    this.articleToDisplay = this.articlesService.getArticleById(articleId);

    this.articlesService.getArticleById(articleId).subscribe(dataLastEmittedFromObserver => {
     this.date = displayDate(new Date(dataLastEmittedFromObserver.date));

     console.log(this.date);
   })
  }

}
