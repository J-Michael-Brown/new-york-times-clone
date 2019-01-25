import { Component } from '@angular/core';
import { loremArticle } from '../../assets/lorem-article';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent{

  newsArticle: Article = loremArticle;

}
