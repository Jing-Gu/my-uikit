import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FeatherIconsModule } from './feather-icons/feather-icons.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ColorsComponent } from './components/colors/colors.component'
import { TypographyComponent } from './components/typography/typography.component'
import { DropShadowComponent } from './components/drop-shadow/drop-shadow.component';
import { IconsComponent } from './components/icons/icons.component'

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    TypographyComponent,
    DropShadowComponent,
    IconsComponent
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
