import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: false,
 // imports: [RouterModule, HeaderComponent, FooterComponent],  // تأكد من استيراد RouterModule
  // Removed providers as provideRouter should be used in bootstrapApplication
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'designo-site';
}
