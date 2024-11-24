import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[]{
    const erros: string[] = [];

    if(!evento.nome){
        erros.push("O campo nome é obrigatório");
    }
    if(!evento.descricao){
        erros.push("O campo descrição é obrigatório");
    }
    if(!evento.alias){
        erros.push("O campo alias é obrigatório");
    }
    if(!evento.data){
        erros.push("O campo data é obrigatório");
    }
    if(!evento.local){
        erros.push("O campo local é obrigatório");
    }
    if(!evento.publicoEsperado){
        erros.push("O campo publico esperado é obrigatório");
    }
    else if(evento.publicoEsperado < 1){
        erros.push("O publico esperado deve ser maior que 0");
    }
    if(!evento.imagem){
        erros.push("O campo imagem é obrigatório");
    }
    if(!evento.imagemBackground){
        erros.push("O campo imagem de fundo é obrigatório");
    }
    
    return erros;
}