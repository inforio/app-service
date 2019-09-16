import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pesquisa-funcionario',
  templateUrl: './pesquisa-funcionario.component.html',
  styleUrls: ['./pesquisa-funcionario.component.css']
})
export class PesquisaFuncionarioComponent {

  @Input() funcionario: any;

  constructor() {}
}
