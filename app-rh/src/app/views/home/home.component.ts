import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  irParaVagas() {
    this.router.navigate(['/vagas']); // ajuste '/vagas' para o path correto da sua listagem de vagas
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']); // ajuste '/cadastro' para o path da tela de cadastro
  }
}
