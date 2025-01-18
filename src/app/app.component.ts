import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { FouterComponent } from "./fouter/fouter.component";
import { LastFooterComponent } from "./last-footer/last-footer.component";
import { LineComponent } from './line/line.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HomeComponent, ContactComponent, AboutComponent, FouterComponent, LastFooterComponent , LineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ass1';
}
