export default class Alias {
    static formatar(valor: string){
        return valor.replace(/ /g, "-").toLowerCase();
    }
}