export default class Senha {
    static nova(tamanho: number = 8){
        const minusculas = "abcdefghijklmnopqrstuvwxyz";
        const maiusculas = minusculas.toUpperCase();
        const numeros = "0123456789";
        const especias = "!@#$%&*";

        const grupos = [minusculas, maiusculas, numeros, especias];
        const senha = [];

        for(let i = 0; i < tamanho; i++){
            const grupo = grupos[Math.floor(Math.random() * grupos.length)];
            senha.push(grupo[Math.floor(Math.random() * grupo.length)]);
        }

        return senha.join("");
    }
}