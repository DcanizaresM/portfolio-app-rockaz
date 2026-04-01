import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Añadido para hacer peticiones de red

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient); // Inyectamos el cliente HTTP

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  // Variables para gestionar la interfaz
  isSubmitting = false;
  isSuccess = false;

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      
      const FORMSPREE_URL = 'https://formspree.io/f/mkopzorq';

      // Enviamos el valor del formulario a Formspree
      this.http.post(FORMSPREE_URL, this.contactForm.value).subscribe({
        next: () => {
          this.isSuccess = true;
          this.isSubmitting = false;
          this.contactForm.reset(); // Limpiamos el formulario
          
          // Ocultamos el mensaje de éxito después de 5 segundos
          setTimeout(() => this.isSuccess = false, 5000);
        },
        error: (error) => {
          console.error('Error al enviar el mensaje', error);
          alert('Hubo un problema al enviar el mensaje. Inténtalo más tarde.');
          this.isSubmitting = false;
        }
      });

    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}