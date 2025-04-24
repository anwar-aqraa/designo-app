import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  onSubmit(): void {
    if (this.name && this.email && this.phone && this.message) {
      console.log('Form submitted with:', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      });

      this.name = '';
      this.email = '';
      this.phone = '';
      this.message = '';
      alert('Thank you for reaching out!');
    } else {
      alert('Please fill in all fields.');
    }
  }
}
