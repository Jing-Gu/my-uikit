import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'uikit'

  darkMode = false

  toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
    this.darkMode = !this.darkMode
  }

}
