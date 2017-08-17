import { Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit, OnChanges {

  @Input('joke') data: Joke;

  //1
  constructor() {
    console.log(`new - data is ${this.data}`);
  }

  //2
  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.data}`);
    for (let key in changes) {
      console.log(`${key} changed
        Current: ${changes[key].currentValue }
        Previous ${changes[key].previousValue }
      `);
    }
  }

  //3
  ngOnInit() {
    console.log(`ngOnInit - data is ${this.data}`);
  }

  //4
  ngDoCheck() {
    console.log(`ngDoCheck`);
  }

  //5
  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`);
  }

  //6
  ngAfterViewInit() {
    console.log(`ngAfterViewInit`);
  }

  //7
  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy`);
  }

}
