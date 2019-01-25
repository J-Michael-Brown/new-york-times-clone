import { Component } from '@angular/core';
import { michael } from '../../assets/lorem-author';
import { Author } from '../models/author.model'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  author: Author = michael;

}
