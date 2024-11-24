import Evento from "../model/Evento";
import { Id } from "../../shared";

export default function CriarEventoVazio(): Partial<Evento>{
    return {
        id: Id.novo(),
        nome: "",
        descricao: "",
        data: new Date(),
        local: "",
        imagem: "",
        publicoEsperado: 1,
    };
}