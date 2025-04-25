import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component'; 
import { OurCompanyComponent } from './our-company/our-company.component'; 

export const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'our-company', component: OurCompanyComponent },
//  { path: 'locations', component: LocationsComponent },
  { path: 'contact', component: ContactComponent }
];
