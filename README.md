# Angular-learning

# 1. Reactive Programming, RxJS và Observable
> RxJS is a library for composing asynchronous and event-based programs by using observable sequences. RxJS Overview

## RxJS core concepts
### 1. Observable 
- đại diện cho ý tưởng về một tập hợp các giá trị hoặc các sự kiện trong tương lai. Khi các giá trị hoặc sự kiện phát sinh trong tương lai, Observable sẽ điều phối nó đến Observer.
- Observable chỉ là một function (class) mà nó có một số yêu cầu đặc biệt. Nó nhận đầu vào là một Function, mà Function này nhận đầu vào là một Observer và trả về một function để có thể thực hiện việc cancel quá trình xử lý. Thông thường (RxJS 5 trở lên) chúng ta đặt tên function đó là unsubscribe.

### 2. Observer
- Observer là một tập hợp các callbacks tương ứng cho việc lắng nghe các giá trị (next, error, hay complete) được gửi đến bởi Observable

### 3. Subscription
- Subscription là kết quả có được sau khi thực hiện một Observable, nó thường dùng cho việc hủy việc tiếp tục xử lý.

### 4. Operators
- Operators là các pure functions cho phép lập trình functional với Observable.

### 5. Subject
- Subject để thực hiện việc gửi dữ liệu đến nhiều Observers (multicasting).

### 6. Scheduler
- Một scheduler sẽ điều khiển khi nào một subscription bắt đầu thực thi, và khi nào sẽ gửi tín hiệu đi.


## 2. Common Creation Operators

## of()
> of() là operator dùng để tạo 1 Observable từ bất cứ giá trị gì: primitives, Array, Object, Function v.v... of() sẽ nhận vào các giá trị và sẽ complete ngay sau khi tất cả các giá trị truyền vào được emit.

``` 
// output: 'hello'
// complete: 'complete'
of('hello').subscribe(observer);

// output: [1, 2, 3]
// complete: 'complete'
of([1, 2, 3]).subscribe(observer);

// output: 1, 2, 3, 'hello', 'world', {foo: 'bar'}, [4, 5, 6]
// complete: 'complete'
of(1, 2, 3, 'hello', 'world', { foo: 'bar' }, [4, 5, 6]).subscribe(observer);
```


## from()
> from() cũng gần giống với of(), cũng được sử dụng để tạo Observable từ 1 giá trị. Tuy nhiên, điểm khác biệt đối với of() là from() chỉ nhận vào giá trị là một Iterable hoặc là một Promise.


## fromEvent()
> fromEvent() được dùng để chuyển đổi 1 sự kiện (Event) sang Observable. Ví dụ chúng ta có DOM Event như mouse click hoặc input.

``` 
const btn = document.querySelector('#btn');
const input = document.querySelector('#input');

// output (example): MouseEvent {...}
// complete: không có gì log.
fromEvent(btn, 'click').subscribe(observer);

// output (example): KeyboardEvent {...}
// complete: không có gì log.
fromEvent(input, 'keydown').subscribe(observer);
```

## fromEventPattern()
> fromEventPattern() là 1 dạng nâng cao của fromEvent(). Nói về concept thì fromEventPattern() cũng giống với fromEvent() là tạo Observable từ sự kiện. Tuy nhiên, fromEventPattern() rất khác với fromEvent() về cách dùng, cũng như loại sự kiện để xử lý. Để hiểu rõ hơn, chúng ta cùng tham khảo ví dụ sau:

``` 
// fromEvent() từ ví dụ trên
// output: MouseEvent {...}
fromEvent(btn, 'click').subscribe(observer);

// fromEventPattern
// output: MouseEvent {...}
fromEventPattern(
  (handler) => {
    btn.addEventListener('click', handler);
  },
  (handler) => {
    btn.removeEventListener('click', handler);
  }
).subscribe(observer);
```

## interval()
> interval() là hàm để tạo Observable mà sẽ emit giá trị số nguyên từ số 0 theo 1 chu kỳ nhất định. Hàm này giống với setInterval.
``` 
// output: 0, 1, 2, 3, 4, ...
interval(1000) // emit giá trị sau mỗi giây
  .subscribe(observer);
```

## timer()
> - Tạo Observable mà sẽ emit giá trị sau khi delay 1 khoảng thời gian nhất định. Cách dùng này sẽ tự complete nhé.
> - Tạo Observable mà sẽ emit giá trị sau khi delay 1 khoảng thời gian và sẽ emit giá trị sau mỗi chu kỳ sau đó. Cách dùng này tương tự với interval() nhưng timer() hỗ trợ delay trước khi emit. Vì cách dùng này giống với interval() nên sẽ không tự complete.

``` 
// output: sau 1 giây -> 0
// complete: 'complete'
timer(1000).subscribe(observer);

// output: sau 1 giây -> 0, 1, 2, 3, 4, 5 ...
timer(1000, 1000).subscribe(observer);
```

## throwError()
> throwError() sẽ dùng để tạo Observable mà thay vì emit giá trị, Observable này sẽ throw 1 error ngay lập tức sau khi subscribe
``` 
// error: 'an error'
throwError('an error').subscribe(observer);
```

# 3. RxJS Transformation Operators

## Pipeable Operators
> Một Pipeable Operator là một function nó nhận đầu vào là một Observable và returns một Observable khác. Chúng là pure operation: Observable truyền vào sẽ không bị thay đổi gì.
``` 
const returnObservable = observableInstance.pipe(operator1(), operator2());
```

## map 
> map<T, R>(project: (value: T, index: number) => R, thisArg?: any): OperatorFunction<T, R>
``` 
import { map } from 'rxjs/operators';

source
  .pipe(
    map((user) => {
      return {
        ...user,
        fullname: `${user.firstname} ${user.lastname}`,
      };
    })
  )
  .subscribe(observer);
```

## pluck
> pluck<T, R>(...properties: string[]): OperatorFunction<T, R>
``` 
import { pluck } from 'rxjs/operators';
source.pipe(pluck('id')).subscribe(observer);
```

## mapTo
> mapTo<T, R>(value: R): OperatorFunction<T, R>
``` 
const element = document.querySelector('#hover');

const mouseover$ = fromEvent(element, 'mouseover');
const mouseleave$ = fromEvent(element, 'mouseleave');

const hover$ = merge(
  mouseover$.pipe(mapTo(true)),
  mouseleave$.pipe(mapTo(false))
);

hover$.subscribe(observer);
```

## scan
> scan<T, R>(accumulator: (acc: R, value: T, index: number) => R, seed?: T | R): OperatorFunction<T, R>
``` 
const button = document.querySelector('#add');

const click$ = fromEvent(button, 'click');

click$.pipe(scan((acc, curr) => acc + 1, 0)).subscribe(observer);
```

## reduce 
> reduce<T, R>(accumulator: (acc: T | R, value: T, index?: number) => T | R, seed?: T | R): OperatorFunction<T, T | R>
``` 
users$.pipe(reduce((acc, curr) => acc + curr.postCount, 0)).subscribe(observer);
```

## toArray
> toArray<T>(): OperatorFunction<T, T[]>
``` 
users$.pipe(reduce((acc, curr) => [...acc, curr], [])).subscribe(observer);
```

## buffer
> buffer<T>(closingNotifier: Observable<any>): OperatorFunction<T, T[]>
``` 
const interval$ = interval(1000);

const click$ = fromEvent(document, 'click');

const buffer$ = interval$.pipe(buffer(click$));

const subscribe = buffer$.subscribe((val) =>
  console.log('Buffered Values: ', val)
);

// output có dạng
'Buffered Values: '[(0, 1)];
'Buffered Values: '[(2, 3, 4, 5, 6)];
```

## bufferTime
> bufferTime<T>(bufferTimeSpan: number): OperatorFunction<T, T[]>
``` 
const source = interval(500);

const bufferTime = source.pipe(
  bufferTime(2000)
);

const bufferTimeSub = bufferTime.subscribe(
  val => console.log('Buffered with Time:', val)
);
// output
"Buffered with Time:"
[0, 1]
"Buffered with Time:"
[2, 3]
"Buffered with Time:"
[4, 5]
...
```


