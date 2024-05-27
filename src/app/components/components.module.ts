import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { FeatureCard } from './feature-card/feature-card.component'
import { GalleryCard3 } from './gallery-card3/gallery-card3.component'
import { Question } from './question/question.component'

@NgModule({
  declarations: [FeatureCard, GalleryCard3, Question],
  imports: [CommonModule, RouterModule],
  exports: [FeatureCard, GalleryCard3, Question],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
