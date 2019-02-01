import { Author } from './author.model';
import { SectionPiece } from './section-piece.model';

class Article {
  constructor(public title: string, public date: Date, public author: Author, public sectionPieces: SectionPiece[]) {}

  getDate() {
    return (this.months[this.date.getUTCMonth()] + '. ' + this.date.getUTCDate() + ', ' + this.date.getUTCFullYear())
  }
}

function displayDate(date: Date) {
  const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return (months[date.getUTCMonth()] + '. ' + date.getUTCDate() + ', ' + date.getUTCFullYear());
}

export { Article, displayDate }
