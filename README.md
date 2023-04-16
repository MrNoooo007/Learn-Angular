# Angular-learning

# Pipe

## Use-Case 
>- Lấy dữ liệu từ server. Đơn giản là gọi API call lên server, phức tạp thì listen tới một websocket để nhận được dữ liệu theo thời gian thực.
> - Transform the data, ví dụ như bạn nhận được giá trị là 2020-06-24T09:00:00.000Z dưới định dạng ISO. Nhưng trên UI mình phải show ở format dễ đọc cho user Jun 24, 2020.
> - Hiển thị dữ liệu lên UI cho người dùng.

## What is pipe ? 
> pipe là một function nhận input mà chúng ta truyền vào, và output ra giá trị mình mong muốn.


## How to use it ? 
> {{ interpolated_value | pipe_name }}

> {{ now | date }}

> Using with param
> {{ now | date:'medium' | uppercase}} // JUN 24, 2020, 5:00:00 PM

## Some pipe build-in 
Angular cung cấp sẵn khá nhiều pipes để có thể sử dụng được khi import `CommonModule` từ package `@angular/common`. Dưới đây là một số pipe mình hay dùng:

| Pipe                                                           | Mô tả                                                                      |
| -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`DatePipe`](https://angular.io/api/common/DatePipe)           | Formats a date.                                                            |
| [`UpperCasePipe`](https://angular.io/api/common/UpperCasePipe) | Convert text sang chữ hoa.                                                 |
| [`LowerCasePipe`](https://angular.io/api/common/LowerCasePipe) | Convert text sang chữ thường.                                              |
| [`CurrencyPipe`](https://angular.io/api/common/CurrencyPipe)   | Hiển thị giá trị tiền tệ.                                                  |
| [`DecimalPipe`](/https://angular.io/api/common/DecimalPipe)    | Hiển thị số thập phân                                                      |
| [`PercentPipe`](https://angular.io/api/common/PercentPipe)     | Hiển thị phần trăm %                                                       |
| [`JsonPipe`](https://angular.io/api/common/JsonPipe)           | Hiển thị json                                                              |
| [`AsyncPipe`](https://angular.io/api/common/AsyncPipe)         | Hiển thị value của observable và tự động unsubscribe khi view được destroy |

## How to custom a pipe ? 
- Tạo một class extend PipeTransform
- Viết login cho pipe này
```
@Pipe({
  name: 'appTitle',
})
export class AppTitlePipe implements PipeTransform {
  transform(resourceId: string): string {
    return resourceId ? 'Edit' : 'Add';
  }
}
```
- Import vào app.module.ts
``` 
@NgModule({
    declarations: [
        AppComponent,
        myPip
    ], 
```
- Dùng như pipe khác thôi 
``` 
<h2 class="ibox-title">{{ userId | appTitle }} User</h2> 
```
