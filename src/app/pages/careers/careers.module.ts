import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../components/components.module'
import { Careers } from './careers.component'

const routes = [
  {
    path: '',
    component: Careers,
  },
]

@NgModule({
  declarations: [Careers],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Careers],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CareersModule {}
