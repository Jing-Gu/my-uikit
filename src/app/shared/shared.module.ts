import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeatherIconsModule } from './feather-icons.module'
import { NgxGaugeModule } from 'ngx-gauge'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherIconsModule,
    NgxGaugeModule
  ],
  exports: [
    FeatherIconsModule,
    NgxGaugeModule
  ]
})
export class SharedModule { }
