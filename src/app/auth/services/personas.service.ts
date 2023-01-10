import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  constructor(private readonly http: HttpClient) {}

  postPerson(person: any) {
    console.log('entre');
    try {
      this.http.post(environment.apiPersona, person);
      throw alert('Usuario creado');
    } catch (error) {
      console.log(error);
    }
  }
}
