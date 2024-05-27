import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-question',
  templateUrl: 'question.component.html',
  styleUrls: ['question.component.css'],
})
export class Question {
  @Input()
  question: string = 'What types of cars do you sell?'
  @Input()
  answer: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.'
  constructor() {}
}
