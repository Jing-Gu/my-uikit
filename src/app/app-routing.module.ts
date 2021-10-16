import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageAlertsComponent } from './pages/page-alerts/alerts.component'
import { PageButtonsComponent } from './pages/page-buttons/buttons.component'
import { ColorsComponent } from './pages/colors/colors.component'
import { DropShadowComponent } from './pages/drop-shadow/drop-shadow.component'
import { IconsComponent } from './pages/icons/icons.component'
import { PageIntroComponent } from './pages/page-intro/page-intro.component'
import { TypographyComponent } from './pages/typography/typography.component'
import { PageAvatarsComponent } from './pages/page-avatars/page-avatars.component'
import { PageProgressComponent } from './pages/page-progress/page-progress.component'
import { PageSpinnersComponent } from './pages/page-spinners/page-spinners.component'
import { PageAccordiansComponent } from './pages/page-accordians/page-accordians.component'
import { PageTablesComponent } from './pages/page-tables/page-tables.component'
import { PageVisualIndicatorsComponent } from './pages/page-visual-indicators/page-visual-indicators.component'
import { PageFormElementsComponent } from './pages/page-form-elements/page-form-elements.component'

const routes: Routes = [
  { path: 'uikit', component: PageIntroComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'drop-shadow', component: DropShadowComponent },
  { path: 'avatars', component: PageAvatarsComponent },
  { path: 'alerts', component: PageAlertsComponent },
  { path: 'accordians', component: PageAccordiansComponent },
  { path: 'buttons', component: PageButtonsComponent },
  { path: 'progress', component: PageProgressComponent },
  { path: 'spinners', component: PageSpinnersComponent },
  { path: 'form-elements', component: PageFormElementsComponent },
  { path: 'visual-indicators', component: PageVisualIndicatorsComponent },
  { path: 'tables', component: PageTablesComponent },
  { path: '', redirectTo: 'uikit', pathMatch: 'full' },
  { path: '**', redirectTo: 'uikit' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
