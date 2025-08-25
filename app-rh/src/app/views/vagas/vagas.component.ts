import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/services/vaga.service';
import { AuthService } from 'src/app/services/auth.service'; // Ajuste este caminho se necessário
import { Subscription } from 'rxjs'; // Adicione esta importação

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
})
export class VagasComponent implements OnInit {
  public vagas: Vaga[] = [];
  private authSubscription!: Subscription;

  menuAtivo = false;
  isLoggedIn = false;
  userName = '';
  isAdmin = false;

  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild('menuIcon') menuIcon!: ElementRef;

  // Injetando os serviços no construtor
  constructor(
    private _vagaService: VagaService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.listarVagas();

    // Inscreve-se no Observable para reagir a mudanças de login
    this.authSubscription = this.authService.currentUser$.subscribe((user) => {
      this.isLoggedIn = !!user;
      if (this.isLoggedIn) {
        this.userName = user.nome;
        this.isAdmin = user.perfil === 'admin';
      } else {
        this.userName = '';
        this.isAdmin = false;
      }
    });
  }

  ngOnDestroy(): void {
    // É importante cancelar a inscrição quando o componente é destruído
    this.authSubscription.unsubscribe();
  }

  // --- O RESTO DO SEU CÓDIGO PERMANECE IGUAL ---

  listarVagas() {
    this._vagaService.getVagas().subscribe((res) => {
      this.vagas = res.map(
        (v) => new Vaga(v.id, v.nome, v.foto, v.descricao, v.salario)
      );
    });
  }

  toggleMenu() {
    this.menuAtivo = !this.menuAtivo;
  }

  @HostListener('document:click', ['$event'])
  clickFora(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (
      this.menuElement &&
      this.menuIcon &&
      !this.menuElement.nativeElement.contains(target) &&
      !this.menuIcon.nativeElement.contains(target)
    ) {
      this.menuAtivo = false;
    }
  }
}
