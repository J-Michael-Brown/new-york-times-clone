class Comment {
  articleKey: string;
  commentKey: string;
  constructor(public baseComment: boolean, public username: string, public content: string, public key: string, public depth: number = 0){
    if(baseComment){
      this.articleKey = key;
    } else {
      this.commentKey = key;
    }
  }
}

function getCommentsOfComment(comments, commentId) {
  const commentsForCommentId: any[] = [];
  comments.forEach(function(comment) {
    if(comment.commentKey == commentId){
      commentsForCommentId.push(comment)
    }
  });
  return  commentsForCommentId;
}

function getCommentsOfArticle(comments, articleId) {
  const commentsForArticleId: any[] = [];
  comments.forEach(function(comment) {
    if(comment.articleKey == articleId){
      commentsForArticleId.push(comment)
    }
  });
  return  commentsForArticleId;
}

export { Comment, getCommentsOfComment, getCommentsOfArticle }
