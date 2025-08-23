import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
email: any;
senha: any;

  constructor(private router: Router) {}

    irParaVagas(){
    this.router.navigate(['/vagas']);
  }

    irParaCadastro(){
      this.router.navigate(['/cadastro']);
    }
}
