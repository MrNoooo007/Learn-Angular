# Angular-learning

# Reactive Programming, RxJS và Observable
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


