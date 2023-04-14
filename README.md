# Angular-learning

# Introduction to Dependency Injection in Angular
> Dependency injection, or DI, is one of the fundamental concepts in Angular. DI is wired into the Angular framework and allows classes with Angular decorators, such as Components, Directives, Pipes, and Injectables, to configure dependencies that they need.

> Two main roles exist in the DI system: dependency consumer and dependency provider

> Trong Angular, DI bao gồm ba thành phần sau đây:
> - Injector: là một object có chứa các API để chúng ta có thể lấy về các instances đã tạo hoặc tạo các instances của các phụ thuộc. 
> - Provider: giống như một công thức để Injector có thể biết làm thế nào để tạo một instance của một phụ thuộc. 
> - Dependency: là một object (có thể là function, một value thông thường) của một kiểu dữ liệu cần phải khởi tạo.


> Bạn có thể cung cấp injectors với providers ở nhiều levels khác nhau trong app, bằng một trong ba cách sau:
> - Trong @Injectable() decorator cho service đó.
> - Trong @NgModule() decorator (providers array) đối với NgModule.
> - Trong @Component() decorator (providers array) đối với component hoặc directive (Chúng ta sẽ tìm hiểu chi tiết về Directive sau).

