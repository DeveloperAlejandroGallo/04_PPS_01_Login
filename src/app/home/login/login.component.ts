import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { stringify } from 'querystring';


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

  constructor(private login: LoginService) { }

  ngOnInit() {}

  validarLogin(): void
  {
    let usrObservable = this.login.Get().subscribe((usuarioBD: any) =>
    {

      // for(let i = 0; i < usuarioBD.length; i++)
      // {
      //   let mail: string;
      //   let pass: string;
      //   let nYa: string ;

      //   mail  = usuarioBD[i].payload.doc.data().email;
      //   pass  = usuarioBD[i].payload.doc.data().password;
      //   nYa = usuarioBD[i].payload.doc.data().nombreYApellido;
        
      //   if (this.email == mail && this.password == pass)
      //   {
      //     this.mensaje = 'Bienvenido ' + nYa ;
      //     break;
      //   }
      //   else
      //   {
      //     this.mensaje = 'Usuario o Password incorrectos';
      //   }
      // }

      if (this.email != '')
      {
        if (this.password != '')
        {
          for (let usuario of usuarioBD)
          {
            let email: string;
            let pass: string;
            let nombreYApellido: string;

            email = usuario.payload.doc.data().email;
            pass = usuario.payload.doc.data().password;
            nombreYApellido = usuario.payload.doc.data().nombreYApellido;

            if (this.email == email && this.password == pass)
            {
              this.mensaje = 'Bienvenido ' + nombreYApellido;
            }
            else
            {
              this.mensaje = 'Usuario o Clave incorrectos';
            }
          }
        }
        else
        {
          this.mensaje = 'Por favor ingrese su clave';
        }
      }
      else
      {
        this.mensaje = 'Debe ingresar un email';
      }
      usrObservable.unsubscribe();
    });

  }
}
