import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  //para enlazar input del formulario
  registroPacienteDTO: RegistroPacienteDTO;
  constructor(){
  this.registroPacienteDTO = new RegistroPacienteDTO();
  }

  //integración del back por API REST
  public registrar(){
    console.log(this.registroPacienteDTO);
  }

  //Confirmar password
  public sonIguales():boolean{
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }
  
}
  


