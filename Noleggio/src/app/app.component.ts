import { Component } from '@angular/core';
import { Noleggio } from './driving.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noleggio';
  data!: Noleggio[];
  obs!: Observable <Noleggio[]>;
  oo!:Observable <{id:number}>
  nuova!:Noleggio;
  nascondi:boolean=false;
  ciclo!: Noleggio;
  constructor(private http: HttpClient){
    this.obs=this.http.get<Noleggio[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi');
    this.obs.subscribe(this.getdata);
  }
  getdata=(d:Noleggio[])=>{this.data=d};
  noleggia(tipo:HTMLInputElement, descrizione:HTMLInputElement, tariffa:HTMLInputElement, valutazioneMedia:HTMLInputElement):boolean{
    let postid = JSON.stringify({
      "Tipo": tipo.value,
      "Descrizione": descrizione.value,
      "Tariffa": tariffa.value,
      "ValutazioneMedia": valutazioneMedia.value
    })
    this.oo=this.http.post<{id:number}>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi', postid);
    this.oo.subscribe(this.getdatapostid);
    this.nuova=new Noleggio(tipo.value, descrizione.value, tariffa.value, parseFloat(valutazioneMedia.value))
    return false}
    getdatapostid=(p:{id:number})=>{
      if (p.id != undefined){this.data.push(this.nuova)}
    };
    mostra(f:Noleggio):boolean{
      this.nascondi=!this.nascondi;
      this.ciclo=f;
      return false}

}
