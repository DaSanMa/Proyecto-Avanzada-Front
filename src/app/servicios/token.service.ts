import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from "buffer";

const TOKEN_KEY = "AuthToken";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  //guardar token del bacj por autenticación de login
  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  //Accede al token guardado
  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  //Obtiene codigo del usuario
  public getCodigo(): number {
    const token = this.getToken();
    if (token) {
      const values = this.decodePayload(token);
      return values.id;
    }
    return 0;
  }

  //Verificación de si está logeado
  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;

  }

  //Función para logearse
  public login(token: string) {
    this.setToken(token);
    this.router.navigate(["/"]);
  }

  //Cerrar sesión
  public logout() {
    window.sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

  //Descodificación del correo
  private decodePayload(token: string): any {
    const payload = token!.split(".")[1];
    const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
    const values = JSON.parse(payloadDecoded);
    return values;
  }
}
