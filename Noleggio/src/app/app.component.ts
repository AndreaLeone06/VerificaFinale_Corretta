import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Driving} from './driving.model';
import { rentModel } from './rent.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  drive:Driving[];
  o:Observable<Driving[]>;
  vis:boolean=false;
  out:Driving;
  noleggiEffettuati:rentModel[]=[];
  constructor(public http:HttpClient){
  this.o=this.http.get<Driving[]>("https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi")
  this.o.subscribe(data=>{this.drive=data})
  }
  noleggio(a:any):void{
    this.out=(a);
    this.vis=true;
    this.noleggiEffettuati.push(new rentModel(a))
    console.log(this.noleggiEffettuati);
  }
}