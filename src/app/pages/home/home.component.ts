import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawn7tk: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Home - Rozgaar Samadhan ')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Home - Rozgaar Samadhan ',
      },
    ])
  }
}
