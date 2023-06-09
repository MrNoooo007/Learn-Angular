import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Author } from 'src/app/interface/authors';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent {
  @Input() author !: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>()
}
