export class FuncionarioService{

    ultimoId = 1;
    funcionarios = [ { id: 1, nome: 'Luiz Mário'} ];

    adicionar(name: string){
        const funcionario = {
            id: ++this.ultimoId,
            nome: name
        };

        this.funcionarios.push(funcionario);
        console.log(this.funcionarios);
    }

    consultar(){
        return this.funcionarios;
    }
}

export class FuncionarioAbreviadoService extends FuncionarioService{
    adicionar(name){
        super.adicionar(name.replace('a', '...'));
    }    
}
