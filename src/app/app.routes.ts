import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { OurCompanyComponent } from './our-company/our-company.component';

export const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'our-company', component: OurCompanyComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
