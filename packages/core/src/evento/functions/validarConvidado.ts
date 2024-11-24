import Convidado from "../model/Convidado";


export default function validarConvidado(convidado: Partial<Convidado>): string[]{
    const erros: string[] = [];
    
    if(!convidado.nome){
        erros.push("O campo nome é obrigatório");
    }
    if(!convidado.email){
        erros.push("O campo email é obrigatório");
    }

    return erros;
}