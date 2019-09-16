import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { PesquisaFuncionarioComponent } from './pesquisa-funcionario/pesquisa-funcionario.component';

import { FuncionarioService, FuncionarioAbreviadoService } from './funcionario.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncionarioComponent,
    PesquisaFuncionarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ FuncionarioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
