import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private readonly personasService: PersonasService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Documento: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),
      Nombres: new FormControl(
        '',
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(16),
          Validators.required,
        ])
      ),
      Apellidos: new FormControl(
        '',
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(16),
          Validators.required,
        ])
      ),
      Telefono: new FormControl(
        '',
        Validators.compose([Validators.minLength(9), Validators.required])
      ),
      Correo: new FormControl(
        '',
        Validators.compose([Validators.email, Validators.required])
      ),
      Direccion: new FormControl('', Validators.required),
    });

    this.registerForm?.valueChanges.subscribe(console.log);
  }

  get userDocumentos() {
    return this.registerForm?.controls['Documento'];
  }
  get userNombres() {
    return this.registerForm?.controls['Nombres'];
  }
  get userApellidos() {
    return this.registerForm?.controls['Apellidos'];
  }
  get userTelefono() {
    return this.registerForm?.controls['Telefono'];
  }

  get userEmail() {
    return this.registerForm?.controls['Correo'];
  }
  get userDirecion() {
    return this.registerForm?.controls['Direcion'];
  }

  sendForm() {
    const user = this.registerForm?.value;
    this.personasService.postPerson(user);
  }
}
