import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>Lets get {{ title }}</div>'
})
export class AppComponent {
  title: string = 'Angular: Getting Started';
}
