# Angular-learning

# ng-template, ngTemplateOutlet và ng-container trong Angular
> ng-template is an Angular element that is used for rendering HTML in a template.

> Khi nào thì nên dùng ng-template ?
> 
> 1. Dùng kết hợp với các Structure Directive của Angular, ví dụ như *ngIf
>    2. Khi một số UI element trong một component bị lặp lại trong chính component đó, nhưng phần code đó quá nhỏ để tách ra làm một component riêng.

### Example:
``` 
<div class="card">
  <div class="card-header">
    You have selected
    <ng-container [ngTemplateOutlet]="counterTmpl"></ng-container>.
  </div>
  <div class="card-body">
    There are <ng-container [ngTemplateOutlet]="counterTmpl"></ng-container> was
    selected.
  </div>
  <div class="card-footer">
    You have selected
    <ng-container [ngTemplateOutlet]="counterTmpl"></ng-container>.
  </div>
</div>

<ng-template #counterTmpl>
  <span class="badge badge-primary">{{ counter }}</span> items
</ng-template>
```
  
### Example: Dùng ng-template để pass vào component khác. Hỗ trợ override template có sẵn trong component.



## ng-template

## ngTemplateOutlet
```  
<ng-template
  #buttonTmpl
  let-label="label"
  let-className="className"
  let-icon="icon"
>
  <button [ngClass]="['btn', className ? className : '']">
    <i *ngIf="icon" class="fa {{icon}}"></i>
    {{ label }}
  </button>
</ng-template>

<ng-container
  [ngTemplateOutlet]="buttonTmpl"
  [ngTemplateOutletContext]="{ label: 'Click here', className: 'btn-primary', icon: null }"
>
</ng-container>

<ng-container
  [ngTemplateOutlet]="buttonTmpl"
  [ngTemplateOutletContext]="{ label: 'Remove', className: 'btn-danger', icon: 'fa-remove' }"
>
</ng-container>
```


## ng-container
> ng-container là một custom html tag để khi render trên UI sẽ không có extra tag để tránh ảnh hưởng đến style mình viết. Như ở ví dụ trên, bạn hoàn toàn có thể viết lại thành.


