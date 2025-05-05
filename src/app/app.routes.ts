import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { OurCompanyComponent } from './our-company/our-company.component';
import { OfficeLocationsComponent } from './office-locations/office-locations.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-company', component: OurCompanyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'office', component: OfficeLocationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
