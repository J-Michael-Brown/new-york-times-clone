import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticlesService } from '../articles.service';
import { Article, getDate } from 'app/models/article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticlesService]
})
export class ArticleComponent implements OnInit {

  articleToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private articlesService: ArticlesService) {}

  ngOnInit() {
    let articleId: string;
    this.route.params.forEach((urlParameters)=> {

    articleId = urlParameters['id'];
    });
    this.articleToDisplay = this.articlesService.getArticleById(articleId);
  }

}
