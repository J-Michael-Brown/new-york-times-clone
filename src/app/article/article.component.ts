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
  articleId: string;

  constructor(private route: ActivatedRoute, private location: Location, private articlesService: ArticlesService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters)=> {
      this.articleId = urlParameters['id'];
    });
    this.articleToDisplay = this.articlesService.getArticleById(this.articleId);

    this.articlesService.getArticleById(this.articleId).subscribe(lastVersionOfArticle => {
     this.date = displayDate(new Date(lastVersionOfArticle.date));
    })
  }

}
