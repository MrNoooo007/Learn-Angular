# Angular-learning

# Angular Router

## Basic Usage
1.  Add your routes in routes array 
``` 
const routes: Routes = [
  {
    path: 'detail',
    component: ArticleDetailComponent
  },
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: 'my-article',
    component: MyArticleComponent
  }
];

```

2. Set up your routes to your application 
``` 
<ul class="nav nav-pills card-header-pills">
  <li class="nav-item">
    <h2 class="nav-link" routerLink="/">Home</h2>
  </li>
  <li class="nav-item">
    <h2 class="nav-link" routerLink="detail">Detail</h2>
  </li>
  <li>
    <h2 routerLink="my-article">
      My Article
    </h2>
  </li>
</ul>
<h1>
  <router-outlet></router-outlet> // where display your component :))
</h1> 
```
