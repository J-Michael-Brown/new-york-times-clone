import { Author } from './author.model';
import { SectionPiece } from './section-piece.model';

class Article {
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  constructor(public title: string, public date: Date, public author: Author, public sectionPieces: SectionPiece[]) {}

  getDate() {
    return (this.months[this.date.getUTCMonth()] + '. ' + this.date.getUTCDate() + ', ' + this.date.getUTCFullYear())
  }
}

export { Article }
