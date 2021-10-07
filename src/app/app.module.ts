import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FeatherIconsModule } from './feather-icons/feather-icons.module'

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
