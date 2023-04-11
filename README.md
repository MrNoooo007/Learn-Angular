# Angular-learning

# ATTRIBUTE DIRECTIVE

> Attribute directive là gì, nó có khác gì Structure directive mà chúng ta đã gặp qua như NgIf, NgForOf không? Đối với Structure directive, nó có thể thêm, xóa, thay đổi cấu trúc cây DOM. Còn một Attribute directive sẽ có thể thay đổi cách hiển thị (style) hoặc hành vi của một DOM element/Component/Directive khác. Đấy chính là sự khác biệt giữa chúng.

## Class Binding 
``[class]="classExpression"``
```
<button [class.isActive]="isActive"
        [class.isDeactivate]="!isActive"
        (click)="isActive = !isActive">
  Active
</button>

```
> With any object-like expression—such as object, Array, Map, or Set —the identity of the object must change for Angular to update the class list. Updating the property without changing object identity has no effect.

*Array*

```
<button [class]="['isActive', 'isRed']"
        (click)="isActive = !isActive">
  Active
</button>

```

*Obj*
```
<button [class]="{foo: true, bar: false}"
        (click)="isActive = !isActive">
  Active
</button>
```

## Style biding
```
<div [style.width]="”someValue”"></div>
```

