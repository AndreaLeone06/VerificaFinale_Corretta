export class Prenotazione {
    Tipo:string;
    Descrizione:string;
    Tariffa:string;
    ValutazioneMedia:string;

    constructor (Tipo:string, Descrizione:string, Tariffa:string, ValutazioneMedia:string){
        this.Tipo=Tipo;
        this.Descrizione=Descrizione;
        this.Tariffa=Tariffa;
        this.ValutazioneMedia=ValutazioneMedia;
    }
}