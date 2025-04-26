import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-locations',
  standalone: false,
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
  exportAs: 'locationsComponent',
  encapsulation: ViewEncapsulation.None
})
export class LocationsComponent {

}
