import { Component, Input } from '@angular/core';
import {Driving} from '../driving.model';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent {
@Input() mostra:Driving;

}