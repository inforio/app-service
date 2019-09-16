import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  
  constructor(private funcionarioSerivce: FuncionarioService){}

  ngOnInit(){}

  adicionar(nome: string){
    this.funcionarioSerivce.adicionar(nome);
  }


}
