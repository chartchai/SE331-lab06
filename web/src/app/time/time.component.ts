import {Component} from '@angular/core';
@Component({
 selector: 'time',
 templateUrl: './app/time/time.component.html'
})
export class TimeComponent {	
	today:number = Date.now();
}