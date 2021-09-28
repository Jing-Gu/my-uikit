import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ColorsComponent } from './components/colors/colors.component'
import { DropShadowComponent } from './components/drop-shadow/drop-shadow.component'
import { TypographyComponent } from './components/typography/typography.component'

const routes: Routes = [
  { path: 'colors', component: ColorsComponent },
  { path: 'typography', component: TypographyComponent},
  { path: 'drop-shadow', component: DropShadowComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
