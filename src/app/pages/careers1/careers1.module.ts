import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../components/components.module'
import { Careers1 } from './careers1.component'

const routes = [
  {
    path: '',
    component: Careers1,
  },
]

@NgModule({
  declarations: [Careers1],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Careers1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Careers1Module {}
