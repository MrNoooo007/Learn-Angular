# Angular-learning

# COMPONENT INTERACTION - PASS DATA FROM PARENT TO CHILD WITH INPUT BINDING

## At child component
`@INPUT DECORATOR`

```
// component.ts
export class MyButtonComponent {
  @Input() name !: string;
  @Input() color !: string;
} 

// html file
<button> {{ name }} </button>

```

## At parent component 

``` 
<app-my-button
  name="xin chao 1"
>
</app-my-button>


<app-my-button
  name="xin chao 2"
>
</app-my-button> 
```
