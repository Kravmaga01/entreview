import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  constructor(private readonly http: HttpClient) {}

  postPerson(person: any) {
    try {
      const user = this.http.post(environment.apiPersona, person);
      user.subscribe(console.log);
      throw alert(`Usario creado `);
    } catch (error) {
      console.log(error);
    }
  }
}
