# Angular-learning

# TypeScript Advanced Type

## Union Type

**Union Type** là những types mang tính chất: EITHER OR (tạm dịch là Hoặc cái này Hoặc cái kia). Để viết Union Type, chúng ta dùng Pipe Symbol `(|)`
``` 
function listen(port: string | number) {
  // do listen
}

listen('3000'); // ok
listen(3000); // ok
listen(true); // TypeError: Argument of type true is not assignable to parameter type string | number
listen(); // TypeError: Invalid number of arguments, expected 1
```

_Union Type for return value_ 

``` 
function getSomething(): string | number {
  return 'string'; // works
  return 30; // works
  return true; // TypeError: Returned expression type boolean is not assignable to type string | number
}
```

_Using type alias for Union Type ( for reuse )_

``` 
type StringOrNumber = string | number;
function listen(port: StringOrNumber) {...}
function getSomething(): StringOrNumber {...}
```

## Intersection Type
> Ngược với Union Type, Intersection Type là type mà kết hợp nhiều type lại với nhau. Nói cách khác, Intersection Type là type có tính chất: AND (dịch nôm na là và).

``` 
function merge<T1, T2>(o1: T1, o2: T2): T1 & T2 {
  return { ...o1, ...o2 };
}

merge({ foo: 'bar' }, { bar: 'foo' });
```

``` 
type StyleProp = {
  backgroundColor: string;
  color: string;
  margin: string;
  padding: string;
  ...
}

type ButtonProps = {
  onClick: (event: MouseEvent) => void;
} & StyleProps;

type TextProps = {
  fontSize: string;
  fontWeight: number;
  ...
} & StyleProps;
```

## Conditional Type
```
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
 
type Example1 = Dog extends Animal ? number : string; 
type Example2 = RegExp extends Animal ? number : string;
```


## something

``` 
// Exclude/Extract
type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;

// Exclude: Loại bỏ những types ở T nếu như những types này gán được cho U
type SomeDiff = Exclude<'a' | 'b' | 'c', 'c' | 'd'>; // 'a' | 'b'. 'c' đã bị removed.

// Extract: Loại bỏ những types ở T nếu như những types này KHÔNG gán được cho U
type SomeFilter = Extract<'a' | 'b' | 'c', 'c' | 'd'>; // 'c'. 'a' và 'b' đã bị removed.

// hoặc có thể dùng Exclude để tạo type alias NonNullable
type NonNullable<T> = Exclude<T, null | undefined>; // loại bỏ null và undefined từ T

type Readonly<T> = { readonly [P in keyof T]: T[P] }; // làm tất cả các props trong type thành readonly. Eg: Rất có lợi khi dùng cho Redux State.
type Partial<T> = { [P in keyof T]?: T[P] }; // làm tất cả các props trong type thành optional. Eg: Rất có lợi cho việc type 1 tham số khi cần truyền vào 1 type nào đó mà ko bắt buộc.
type Nullable<T> = { [P in keyof T]: T[P] | null }; // cái này tương tự như Partial, Partial sẽ trả về T[P] | undefined. Còn Nullable sẽ trả về T[P] | null

type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type Record<K extends keyof any, T> = { [P in K]: T };

// Pick: Pick từ trong T những type có key là K
type Person = {
  firstName: string;
  lastName: string;
  password: string;
};

type PersonWithNames = Pick<Person, 'firstName' | 'lastName'>; // {firstName: string, lastName: string}

// Record: Gán type T cho lần lượt từng key P trong K
type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;
// { prop1: string, prop2: string, prop3: string }

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// ReturnType: trả về type của giá trị mà function T trả về.
type Result = ReturnType<() => string>; // string

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Omit: loại bỏ type có key là K trong T
type PersonWithoutPassword = Omit<Person, 'password'>; // {firstName: string, lastName: string}
```
