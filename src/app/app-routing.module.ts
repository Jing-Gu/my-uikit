import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AlertsComponent } from './components/alerts/alerts.component'
import { ButtonsComponent } from './components/buttons/buttons.component'
import { ColorsComponent } from './components/colors/colors.component'
import { DropShadowComponent } from './components/drop-shadow/drop-shadow.component'
import { IconsComponent } from './components/icons/icons.component'
import { PageIntroComponent } from './components/page-intro/page-intro.component'
import { TypographyComponent } from './components/typography/typography.component'

const routes: Routes = [
  { path: 'uikit', component: PageIntroComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'typography', component: TypographyComponent },
  { path:'icons', component: IconsComponent },
  { path: 'drop-shadow', component: DropShadowComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: '', redirectTo: 'uikit', pathMatch: 'full' },
  { path: '**', redirectTo: 'uikit' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
