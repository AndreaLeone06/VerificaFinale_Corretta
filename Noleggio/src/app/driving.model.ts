export class Noleggio {
    Tipo:string;
    Descrizione:string;
    Tariffa:string;
    ValutazioneMedia:number;

    constructor (Tipo:string, Descrizione:string, Tariffa:string, ValutazioneMedia:number){
        this.Tipo=Tipo;
        this.Descrizione=Descrizione;
        this.Tariffa=Tariffa;
        this.ValutazioneMedia=ValutazioneMedia;
    }
}