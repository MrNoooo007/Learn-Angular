# Angular-learning

# Content Projection trong Angular
> Content projection is a pattern in which you insert, or project, the content you want to use inside another component

## How does Content Projection (Single-slot) look like: 

### parent component
``` 
<app-toggle>
  <span>
    Hello
  </span>
</app-toggle>
```

### child component
``` 
<div class="toggle-label">
  <ng-content></ng-content>
</div>
```

There are 3 types of content projection:

## Single-slot content projection

## Multi-slot content projection

### parent component
``` 
<app-toggle>
  <span id="hi">
    Hi
  </span>
  <span id="hello">
    Hello
  </span>
</app-toggle>
```

### child component
``` 
<div class="toggle-label">
  <h2>
    <ng-content select="#hello"></ng-content>
  </h2>
  <h1>
    <ng-content select="#hi"></ng-content>
  </h1>
</div>
```

## Conditional content projection
