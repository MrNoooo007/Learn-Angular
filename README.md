# Angular-learning

# Custom Two-way binding

```
<input type="text" [ngModel]="name" (ngModelChange)="yourName = $event" />
```

- [ngModel]: use to bind name to value of input
- (ngModelChange): use to bind input value to name variable
