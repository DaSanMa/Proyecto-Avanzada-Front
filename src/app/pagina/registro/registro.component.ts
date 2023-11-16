import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


//controlador de registro.component
export class RegistroComponent {

  //para enlazar input del formulario
  registroPacienteDTO: RegistroPacienteDTO;
  ciudades:string[];
  eps:string[];
  tipoSangre:string[];
  archivos!: FileList;

  //Constructor general
  constructor(){
  this.registroPacienteDTO = new RegistroPacienteDTO();
  this.ciudades=[];
  this.eps=[];
  this.tipoSangre=[];
  this.cargarCiudades();
  this.cargarEps();
  this.cargarTipoSangre();
  }

  //integración del back por API REST
  public registrar(){
    if (this.archivos != null && this.archivos.length > 0) {
      console.log(this.registroPacienteDTO);
    } else {
      console.log("Suba una foto");
    }
    
  }

  //Confirmar password
  public sonIguales():boolean{
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }

  //función para cargar ciudades
  private cargarCiudades(){
    this.ciudades.push("Bogotá");
    this.ciudades.push("Cali");
    this.ciudades.push("Barranquilla");
    this.ciudades.push("Cartagena");
    this.ciudades.push("Medellín");
    this.ciudades.push("Bucaramanga");
    this.ciudades.push("Cucuta");
  }

  //función para cargar EPS
  private cargarEps(){
    this.eps.push("EPS 1");
    this.eps.push("EPS 2");
    this.eps.push("EPS 3");
  }
  
  //función para cargar tipo de sangre
  private cargarTipoSangre(){
    this.tipoSangre.push("A+");
    this.tipoSangre.push("A-");
    this.tipoSangre.push("B+");
    this.tipoSangre.push("B-");
    this.tipoSangre.push("AB+");
    this.tipoSangre.push("AB-");
    this.tipoSangre.push("O+");
    this.tipoSangre.push("O-");
  }

  //Metodo para capturar files
  public onFileChange(event:any){
    if(event.target.files.length > 0){
      const files = event.target.files;
      console.log(files);
    }
  }
}
  


