import { Component } from '@angular/core';
import { LoginPacienteDTO } from 'src/app/modelo/login-paciente-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  loginPacienteDTO: LoginPacienteDTO;

  //constructor
  constructor (){
  this.loginPacienteDTO = new LoginPacienteDTO();

  }
  //integración del back por API REST
  public ingresar(){
    
    console.log(this.loginPacienteDTO);

  }

}
