import { $BACKSLASH } from '@angular/compiler/src/chars';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke-form',
  styleUrls: [
    './joke-form.component.css'
  ],
  templateUrl: './joke-form.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

  ngOnInit() {
  }

}
