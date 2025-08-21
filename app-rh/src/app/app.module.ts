import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';
import { HomeComponent } from './views/home/home.component';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurriculoFormComponent } from './views/curriculo-form/curriculo-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InternaComponent } from './pages/interna/interna.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VagasComponent,
    CurriculosComponent,
    HomeComponent,
    PainelVagasComponent,
    CurriculoFormComponent,
    LoginComponent,
    RegistroComponent,
    InternaComponent,
    CadastroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // módulo necessário para que a página faça as requisições HttpClient
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
