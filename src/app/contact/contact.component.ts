import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationsComponent } from "../locations/locations.component";

@Component({
  selector: 'app-contact',
  standalone: false,
 // imports: [CommonModule, FormsModule, LocationsComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit(): void {
    const { name, email, phone, message } = this.formData;

    if (name && email && phone && message) {
      console.log('Form submitted with:', this.formData);

   
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };

      alert('Thank you for reaching out!');
    } else {
      alert('Please fill in all fields.');
    }
  }
}
