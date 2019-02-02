import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CommentService } from '../comment.service';
import { Comment } from 'app/models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [CommentService]
})
export class CommentComponent implements OnInit {
  articleId: string;
  // comments: FirebaseListObservable<any[]>;

  constructor(private route: ActivatedRoute, private location: Location, private commentService: CommentService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=> {

    this.articleId = urlParameters['id'];
    });

    // this.comments = this.commentService.getCommentsOnArticleId(this.articleId);
    //
    // this.articlesService.getArticleById(this.articleId).subscribe(lastVersionOfArticle => {
    //   this.date = displayDate(new Date(lastVersionOfArticle.date));
    // })
  }

}