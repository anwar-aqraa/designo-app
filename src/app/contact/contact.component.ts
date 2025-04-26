import { Component } from '@angular/core';



@Component({
  selector: 'app-contact',
  standalone: false,
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
