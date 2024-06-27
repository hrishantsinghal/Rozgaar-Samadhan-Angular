import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-careers1',
  templateUrl: 'careers1.component.html',
  styleUrls: ['careers1.component.css'],
})
export class Careers1 {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Careers - Rozgaar Samadhan')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Careers - Rozgaar Samadhan',
      },
    ])
  }
}
