import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
selector: 'app-contact',
standalone: true,
// 1. Importamos el módulo de formularios reactivos
imports: [ReactiveFormsModule],
templateUrl: './contact.html',
styleUrl: './contact.css'
})
export class ContactComponent {
// 2. Inyectamos el constructor de formularios
private fb = inject(FormBuilder);

// 3. Creamos la estructura y las reglas de validación
contactForm = this.fb.group({
name: ['', [Validators.required, Validators.minLength(3)]],
email: ['', [Validators.required, Validators.email]],
message: ['', [Validators.required, Validators.minLength(10)]]
});

// 4. Función que se ejecuta al pulsar el botón "Enviar"
onSubmit() {
if (this.contactForm.valid) {
// Si todo está bien, simulamos el envío y limpiamos el formulario
console.log('Datos listos para enviar:', this.contactForm.value);
alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
this.contactForm.reset();
} else {
// Si hay errores, forzamos a que se muestren marcando todo como "tocado"
this.contactForm.markAllAsTouched();
}
}
}