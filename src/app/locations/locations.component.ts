import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
  exportAs: 'locationsComponent',
  encapsulation: ViewEncapsulation.None
})
export class LocationsComponent {

}
