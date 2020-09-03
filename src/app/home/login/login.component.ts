import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { stringify } from 'querystring';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit
{
  // Declaraciones
  email: string;
  password: string;
  mensaje: string;

  constructor(
    private login: LoginService,
    private authServise: AuthenticationService,
    private router: Router) { }

  ngOnInit() {}

  validarLoginUsr(): void
  {
    const usrObservable = this.login.GetUsuarios().subscribe((usuarioBD: any) =>
    {
      if (this.email)
      {
        if (this.password)
        {
          for (const usuario of usuarioBD) // ForEach
          {
            let email: string;
            let pass: string;
            let nombreYApellido: string;

            email = usuario.payload.doc.data().email;
            pass = usuario.payload.doc.data().password;
            nombreYApellido = usuario.payload.doc.data().nombreYApellido;

            // tslint:disable-next-line: triple-equals
            if (this.email == email && this.password == pass)
            {
              this.mensaje = 'Bienvenido ' + nombreYApellido;
            }
            else
            { this.mensaje = 'Usuario o Clave incorrectos'; }
          }
        }
        else
        { this.mensaje = 'Por favor ingrese su clave'; }
      }
      else
      { this.mensaje = 'Debe ingresar un email'; }
      usrObservable.unsubscribe();
    });

  }

  validateEmailPassw()
  {
    this.authServise.initSesion(this.email, this.password).then(resp =>
    {
      try {
        this.mensaje = 'Bienvenido';
      
      }
      catch (error) {
        this.mensaje = error.message;
      }
      

    }).catch(error => {
      this.mensaje = error.message;
    });
  }

}
