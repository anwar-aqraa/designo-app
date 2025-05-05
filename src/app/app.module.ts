import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { OurCompanyComponent } from './our-company/our-company.component';
import { LocationsComponent } from './locations-section/locations.component';
import { CtaComponent } from './cta/cta.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app.routes';
import { OfficeLocationsComponent } from './office-locations/office-locations.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    OurCompanyComponent,
    LocationsComponent,
    CtaComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    OfficeLocationsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
