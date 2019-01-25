import { Author } from './author.model';
import { SectionPiece } from './section-piece.model';

class Article {
  constructor(public title: string, public date: Date, public author: Author, public sectionPieces: SectionPiece[]) {}
}

export { Article }
