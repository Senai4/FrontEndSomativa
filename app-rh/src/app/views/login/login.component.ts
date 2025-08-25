import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credenciais = {
    email: '',
    senha: '',
  };

  // Injete o serviço corretamente
  constructor(private router: Router, private authService: AuthService) {}

  fazerLogin() {
    console.log('Botão de login clicado!');
    if (!this.credenciais.email || !this.credenciais.senha) {
      console.error('Por favor, preencha todos os campos.');
      return;
    }

    // Use a variável authService
    this.authService.login(this.credenciais).subscribe({
      next: (loginSuccess: boolean) => {
        if (loginSuccess) {
          console.log('Login bem-sucedido!');
          const usuarioAtual = this.authService.usuarioAtual();
          if (usuarioAtual && usuarioAtual.perfil === 'admin') {
            this.router.navigate(['/pagina-adm']);
          } else {
            this.router.navigate(['/vagas']);
          }
        } else {
          console.error('Credenciais inválidas. Tente novamente.');
        }
      },
      error: (err: any) => {
        console.error('Ocorreu um erro no login:', err);
      },
    });
  }

  irParaVagas() {
    this.router.navigate(['/vagas']);
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
