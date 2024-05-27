import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../components/components.module'
import { ApplyToJob } from './apply-to-job.component'

const routes = [
  {
    path: '',
    component: ApplyToJob,
  },
]

@NgModule({
  declarations: [ApplyToJob],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ApplyToJob],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ApplyToJobModule {}
