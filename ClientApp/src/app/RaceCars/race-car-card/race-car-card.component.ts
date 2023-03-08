import { Component, Input, OnInit } from '@angular/core';
import { RaceCar } from '../../_models/race-car';

@Component({
  selector: 'app-race-car-card',
  templateUrl: './race-car-card.component.html',
  styleUrls: ['./race-car-card.component.css']
})
export class RaceCarCardComponent implements OnInit {
  @Input() raceCar: RaceCar | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
