import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CommentService } from '../comment.service';
import { Comment, getCommentsOfComment, getCommentsOfArticle } from 'app/models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [CommentService]
})
export class CommentComponent implements OnInit {
  articleId: string;
  trueComments;
  commentSnapshot;
  commentArray: Comment[];

  constructor(private route: ActivatedRoute, private location: Location, private commentService: CommentService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=> {

    this.articleId = urlParameters['id'];
    });

    this.trueComments = this.commentService.getComments();
    const commentArray = this.commentArray;
    this.commentService.getComments().subscribe(lastVersionOfComments => {
      this.commentSnapshot = getCommentsOfArticle(lastVersionOfComments, parseInt(this.articleId));
      this.commentSnapshot.forEach((comment)=> {
        console.log(comment);
      })
    });
  }

}
