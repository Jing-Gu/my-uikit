import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SharedModule } from './shared/shared.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ColorsComponent } from './pages/colors/colors.component'
import { TypographyComponent } from './pages/typography/typography.component'
import { DropShadowComponent } from './pages/drop-shadow/drop-shadow.component';
import { IconsComponent } from './pages/icons/icons.component';
import { PageIntroComponent } from './pages/page-intro/page-intro.component';
import { PageAlertsComponent } from './pages/page-alerts/alerts.component';
import { PageButtonsComponent } from './pages/page-buttons/buttons.component';
import { PageAvatarsComponent } from './pages/page-avatars/page-avatars.component';
import { PageProgressComponent } from './pages/page-progress/page-progress.component';
import { PageSpinnersComponent } from './pages/page-spinners/page-spinners.component';
import { PageAccordiansComponent } from './pages/page-accordians/page-accordians.component';
import { PageTablesComponent } from './pages/page-tables/page-tables.component';
import { PageVisualIndicatorsComponent } from './pages/page-visual-indicators/page-visual-indicators.component';
import { PageFormElementsComponent } from './pages/page-form-elements/page-form-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    TypographyComponent,
    DropShadowComponent,
    IconsComponent,
    PageIntroComponent,
    PageAlertsComponent,
    PageButtonsComponent,
    PageAvatarsComponent,
    PageProgressComponent,
    PageSpinnersComponent,
    PageAccordiansComponent,
    PageTablesComponent,
    PageVisualIndicatorsComponent,
    PageFormElementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
