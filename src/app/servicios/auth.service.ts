import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroPacienteDTO } from '../modelo/registro-paciente-dto';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { LoginDTO } from '../modelo/login-dto';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  registrar(usuario: any) {
    throw new Error('Method not implemented.');
  }
  private authURL = "http://localhost:8080/api/auth";
  
  constructor(private http: HttpClient) { }

  //registrarPaciente
  public registrarPaciente(paciente: RegistroPacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/registrar-paciente`, paciente);
  }

  //login
  public login(loginDTO: LoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginDTO);
  }
}
