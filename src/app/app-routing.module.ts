import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ColorsComponent } from './components/colors/colors.component'
import { TypographyComponent } from './components/typography/typography.component'

const routes: Routes = [
  { path: 'colors', component: ColorsComponent },
  { path: 'typography', component: TypographyComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
