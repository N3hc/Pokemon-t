import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  showPassword: boolean = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  showPassword2: boolean = false;

  togglePassword2(): void {
    this.showPassword2 = !this.showPassword2;
  }

  registerForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'client',
    termsAccepted: false
  };

  // Método para enviar el formulario
  onSubmit() {
    if (this.registerForm.password !== this.registerForm.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    if (!this.registerForm.termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    // Aquí puedes agregar lógica para enviar el formulario al backend o realizar validaciones
    alert("Formulario de registro enviado con éxito.");
  }

}
