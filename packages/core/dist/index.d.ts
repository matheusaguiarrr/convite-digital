interface Convidado {
    id: string;
    nome: string;
    email: string;
    confirmado: boolean;
    possuiAcompanhante: boolean;
    qtdeAcompanhantes: number;
}

interface Evento {
    id: string;
    alias: string;
    senha: string;
    nome: string;
    data: Date;
    local: string;
    descricao: string;
    imagem: string;
    imagemBackground: string;
    publicoEsperado: number;
    convidados: Convidado[];
}

declare function CriarEventoVazio(): Partial<Evento>;

declare function complementarEvento(eventoParcial: Partial<Evento>): Evento;

declare function criarConvidadoVazio(): Partial<Convidado>;

declare function complementarConvidado(convidado: Partial<Convidado>): Convidado;

declare const eventos: Evento[];

declare class Id {
    static novo(): string;
    private static hash;
}

declare class Alias {
    static formatar(valor: string): string;
}

declare class Senha {
    static nova(tamanho?: number): string;
}

declare class Data {
    static formatar(data: Date): string;
    static desformatar(data: string): Date;
}

export { Alias, type Convidado, Data, type Evento, Id, Senha, complementarConvidado, complementarEvento, criarConvidadoVazio, CriarEventoVazio as criarEventoVazio, eventos };
