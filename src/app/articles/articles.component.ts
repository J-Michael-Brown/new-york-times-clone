import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticlesService]
})


export class ArticlesComponent implements OnInit {

  articles: FirebaseListObservable<any[]>;

  constructor(private router: Router, private articlesService: ArticlesService) {}

  goToDetailPage(clickedArticle: Article) {
    this.router.navigate(['articles', clickedArticle.$key]);
  }

  ngOnInit() {
    this.articles = this.articlesService.getArticles();
  }

}
