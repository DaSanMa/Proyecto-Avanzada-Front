import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


//controlador de registro.component
export class RegistroComponent {

  //variables
  alerta!: Alerta;

  //para enlazar input del formulario
  registroPacienteDTO: RegistroPacienteDTO;
  ciudades: string[];
  eps: string[];
  tipoSangre: string[];
  archivos!: FileList;

  //Constructor general
  constructor(private imagenService: ImagenService, private authService: AuthService, private clinicaService: ClinicaService) {

    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.ciudades = [];
    this.eps = [];
    this.tipoSangre = [];
    this.cargarCiudades();
    this.cargarEps();
    this.cargarTipoSangre();
  }

  //integración del back por API REST
  public registrar() {
    if (this.registroPacienteDTO.urlFoto.length != 0) {
      this.authService.registrar(this.usuario).subscribe({
        next: data => {
          this.alerta = { mensaje: data.respuesta, tipo: "success" };
        },
        error: error => {
          this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
        }
      });
    } else {
      this.alerta = { mensaje: "Debe subir una imagen", tipo: "danger" };
    }
  }

  //Confirmar password
  public sonIguales(): boolean {
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }

  //función para cargar ciudades
  private cargarCiudades() {
    this.clinicaService.listarCiudades().subscribe({
      next: data => {
        this.ciudades = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  //función para cargar EPS
  private cargarEps() {
    this.eps.push("EPS 1");
    this.eps.push("EPS 2");
    this.eps.push("EPS 3");
  }

  //función para cargar tipo de sangre
  private cargarTipoSangre() {
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
  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.registroPacienteDTO.urlFoto = event.target.files[0].name;
      this.archivos = event.target.files;
    }
  }

  //Subir imagen
  public subirImagen() {
    if (this.archivos != null && this.archivos.length > 0) {
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          this.registroPacienteDTO.urlFoto = data.respuesta.url;
        },
        error: error => {
          this.alerta = { mensaje: error.error, tipo: "danger" };
        }
      });
    } else {
      this.alerta = { mensaje: 'Debe seleccionar una imagen y subirla', tipo: "danger" };
    }
  }

}



