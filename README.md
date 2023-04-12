# Angular-learning

# COMPONENT INTERACTION - PARENT LISTENS FOR CHILD EVENT

## At child component

- HTML
```
<span *ngIf="author"> {{ author.id }} - {{ author.firstName }} - {{ author.lastName }}</span>
<button (click)="handleDelete()">x</button>
```
- COMPONENT
```
  @Input() author !: Author;
  @Output() deleteAuthor = new EventEmitter;

  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
```
> Using decorator Output to spread out this.author to the parent component 
## At parent component
- HTML
``` 
<app-author-detail
  *ngFor="let author of authors"
  [author]="author"
  (deleteAuthor)="handleDelete($event)"
>
</app-author-detail>
```
> Using deleteAuthor that we emitted in child component with $event param
- COMPONENT
```
  handleDelete(author: Author) {
    this.authors = this.authors.filter((item) => item.id != author.id)
  }
```
