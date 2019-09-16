# AppService

Projeto de treinamento do angular sobre services/components/modules

# Provider

Para criar um serivice único para toda a aplicação

providers: [
    FuncionarioService
]

Porém para mudar a instância do serviço

{ provide: FuncionarioService, useClass: FuncionarioAbreviadoService }