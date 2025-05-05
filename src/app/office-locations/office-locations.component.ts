import { Component } from '@angular/core';

@Component({
  selector: 'app-office-locations',
  standalone: false,
  templateUrl: './office-locations.component.html',
  styleUrls: ['./office-locations.component.scss']
})
export class OfficeLocationsComponent {
  offices = [
    {
      country: 'Canada',
      name: 'Desigoo Central Office',
      address: '3886 Wellington Street\nToronto, Ontario M9C 3J5',
      phone: '+1 253-863-8967',
      email: 'contact@desigoo.co',
      mapUrl: 'assets/C&A-locations.jpg' 
    },
    {
      country: 'Australia',
      name: 'Desigoo AU Office',
      address: '19 Balonne Street\nNew South Wales 2443',
      phone: '(02) 6720 9092',
      email: 'contact@desigoo.au',
      mapUrl: 'assets/C&A-locations.jpg'
    },
    {
      country: 'United Kingdom',
      name: 'Desigoo UK Office',
      address: '13 Colorado Way\nRhyd-y-fro SA8 9GA',
      phone: '078 3115 1400',
      email: 'contact@desigoo.uk',
      mapUrl: 'assets/UK-location.jpg'
    }
  ];
}
