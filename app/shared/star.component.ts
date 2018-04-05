import {Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent{
    starWidth: number;
   @Input() rating: number;
   @Output() notify: EventEmitter<string> = new EventEmitter<string>();
   onClick(): void
   {
       console.log('the rating is ${this.rating}');
       this.notify.emit('Click Me ${this.rating}');
   }
}

