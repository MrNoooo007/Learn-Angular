import { Component } from '@angular/core';
import { authors } from '../interface/authors';

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors = authors; 
  currentAuthor = authors[0];

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  onDelete(id: number) {
    this.authors = this.authors.filter(item => item.id != id);    
  }
}

