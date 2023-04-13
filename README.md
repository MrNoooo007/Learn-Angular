# Angular-learning

# Template Variable và ViewChild/ViewChildren

## Parent interacts with child via local variable
```
<button (click)="toggleComp.toggle()">Toggle</button>

<br />

<app-toggle #toggleComp></app-toggle>
```
> (click) will execute toggle() in toggleComp.


## Parent class with ViewChild
```
<button (click)="toggleInside()" >toggle!</button>
<app-toggle #toggle></app-toggle>
```
```
export class AppComponent {
  @ViewChild('toggle') toggle !: ToggleComponent;

  toggleInside() {
    this.toggle.toggle();
  }
}
```

## Parent class with ViewChildren
