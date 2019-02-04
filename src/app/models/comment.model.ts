class Comment {
  articleKey: string;
  commentKey: string;
  constructor(public baseComment: boolean, public username: string, public content: string, public key: string, public depth: number = 0, public ownKey: string){
    if(baseComment){
      this.articleKey = key;
    } else {
      this.commentKey = key;
    }
  }
}

export { Comment }
