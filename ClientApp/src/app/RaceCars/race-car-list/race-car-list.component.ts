import { Component, OnInit } from '@angular/core';
import { RaceCar } from '../../_models/race-car';
import { RaceCarService } from '../../_services/race-car.service';

@Component({
  selector: 'app-race-car-list',
  templateUrl: './race-car-list.component.html',
  styleUrls: ['./race-car-list.component.css']
})
export class RaceCarListComponent implements OnInit {
  raceCars: RaceCar[] = []

  constructor(private raceCarService: RaceCarService) { }

  ngOnInit(): void {
    this.raceCarService.getRaceCarsDb().subscribe(
      arr => {
        this.raceCars = arr
      })
  }

}
