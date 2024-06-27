import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-careers',
  templateUrl: 'careers.component.html',
  styleUrls: ['careers.component.css'],
})
export class Careers {
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
