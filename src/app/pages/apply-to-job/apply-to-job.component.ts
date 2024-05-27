import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'apply-to-job',
  templateUrl: 'apply-to-job.component.html',
  styleUrls: ['apply-to-job.component.css'],
})
export class ApplyToJob {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Apply-to-Job - Rozgaar Samadhan ')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Apply-to-Job - Rozgaar Samadhan ',
      },
    ])
  }
}
