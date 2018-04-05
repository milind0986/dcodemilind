import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <nav class='navbar navbar-default'>
    <div class='continer-fluid'>
    <a class='navbar-brand'>{{pageTitle}}
</a>
<ul class='nav navbar-nav'>
<li><a [routerLink]="['/welcome']">Home</a></li>
<li><a [routerLink]="['/products']">products list</a></li>
</ul>
    </div>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class AppComponent {
  title: string = 'Angular: Getting Started';
}
