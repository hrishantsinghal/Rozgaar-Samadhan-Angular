import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card',
  templateUrl: 'feature-card.component.html',
  styleUrls: ['feature-card.component.css'],
})
export class FeatureCard {
  @Input()
  heading: string = 'Tailored Matching Process'
  @Input()
  subHeading: string =
    'Find the perfect surveyor for your project through our customized matching process. We analyze your requirements and connect you with the most suitable professionals from our database.'
  constructor() {}
}
