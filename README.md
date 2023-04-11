# Angular-learning

## Ng-If

- shorthand: 
```
<div *ngIf="condition">Content to render when condition is true.</div>
```

- expanded:
``` 
<ng-template [ngIf]="condition"><div>Content to render when condition is
true.</div></ng-template>
```

- NgIf & Else with template
``` 
<div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
<ng-template #elseBlock>Content to render when condition is false.</ng-template>
```

