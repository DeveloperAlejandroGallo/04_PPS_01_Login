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

      for(let i = 0; i < usuarioBD.length; i++)
      {
        let mail: string;
        let pass: string;
        let nYa: string ;

        mail  = usuarioBD[i].payload.doc.data().email;
        pass  = usuarioBD[i].payload.doc.data().password;
        nYa = usuarioBD[i].payload.doc.data().nombreYApellido;
        
        if (this.email == mail && this.password == pass)
          {
            this.mensaje = 'Bienvenido ' + nYa ;
            break;
          }
          else
          {
            this.mensaje = 'Usuario o Password incorrectos';
          }
      }
      usrObservable.unsubscribe();
    });

  }
}
