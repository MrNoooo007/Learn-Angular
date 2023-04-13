# Angular-learning

# Typescript


## Default Types

```  
let someString: string;
let someNumber: number;
let someBoolean: boolean;
let something: any; // có thể gán sang cho bất kỳ kiểu dữ liệu nào khác
let someStringArray: string[]; // tương tự cho number[], boolean[], any[]
let someObject: object;
let someNull: null;
let someUndefined: undefined;
let someUnknown: unknown;
let someNever: never; // ví dụ như một hàm throw exception
let someTuple: [string, number];
let someVoidFunction: () => void; // một hàm không trả về giá trị gì sau khi thực thi
let someFunction: () => string; // một hàm trả về giá trị có type "string" sau khi thực thi
```

## Interface/Type

``` 
interface User {
  firstName: string;
  lastName: string;
  age: number;
  job?: string;
}

// hoặc dùng type. Chỉ nên dùng 1 trong 2 cho cùng 1 tên (ở đây là User)
type User = {
  firstName: string;
  lastName: string;
  age: number;
  job?: string;
};

const john: User = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  job: 'Student',
};
const susan: User = {
  firstName: 'Sue',
  lastName: 'Smith',
  age: 40,
};
```

## Class
```
class User {
  firstName: string;
  lastName: string;
  age: number;
  job?: string;

  constructor(firstName: string, lastName: string, age: number, job?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;
  }
} 
```

```
// Access Modifer
class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public job?: string
  ) {}
}
```

## Generics

``` 
abstract class BaseService<T> {
  protected model: Model<T>;

  find(): T[] {
    return this.model.findAll();
  }

  findOne(id: number): T {
    return this.model.findById(id);
  }
}

class DogService extends BaseService<Dog> {
  constructor(dogModel: Model<Dog>) {
    super();
    this.model = dogModel;
  }
}

class CatService extends BaseService<Cat> {
  constructor(catModel: Model<Cat>) {
    super();
    this.model = catModel;
  }
}
```


# Tại sao lại là TypeScript ? 

## Pros
> Như những gì đã nhắc đến ở trên, TS giúp developers phát triển phần mềm một cách tường minh hơn với những type definition mà TS cũng như các thư viện dùng cho TS cung cấp. Với khả năng áp dụng tính thừa kế với những syntax quen thuộc trong OOP như: abstract, class, và type parameter <T>, TS giúp developers có thể phát triển ứng dụng một cách nhanh, tường minh, chính xác, dễ bảo trì và mở rộng hơn.
Trong thời gian trở lại đây, TS luôn có thứ hạng rất cao (hạng 1 hoặc hạng 2) về Ngôn ngữ được yêu thích trong những cuộc khảo sát có tiếng tăm như StackOverflow Survey.



## Cons
> Nhưng cũng như bất cứ thứ gì trên đời (bất cứ không nhỉ? raised_eyebrow) thì đều có mặt tốt mặt xấu.
TS mang lại nhiều lợi ích, nhưng cũng mang lại không ít phiền toái. Điển hình như:
code nhiều hơn vì những định nghĩa types (type definition)
conditional check nghiêm khắc hơn gây khó khăn và các thư viện bên ngoài phải có type defs (d.ts file) để hỗ trợ TS, nếu không thì cũng như không….
TypeScript Tax.

