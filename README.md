# Angular-learning

## Data Binding 

### 1. Property binding
``` 
<input type="text" [value]="age"> 
```
- Value at this input tag equal age variable

### 2. Event binding
``` 
<button (click)="clickMe()">Click Me !</button> 
```
- When you click to this button, the action in function clickMe() will be executed
- There are a lot of events, such as ...blur, dbclick, cancle,...

### 3. Two-way binding
``` 
<input type="text" [(ngModel)]="name">
```
- variable name change, the visible of name will be changed, Or Otherwise.
