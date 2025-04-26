import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LocationsComponent } from '../locations/locations.component';
import { CtaComponent } from "../cta/cta.component";

@Component({
  selector: 'app-our-company',
  standalone: false,
 // imports: [CommonModule, LocationsComponent, CtaComponent],
  templateUrl: './our-company.component.html',
  styleUrls: ['./our-company.component.scss']
})


export class OurCompanyComponent {

}
