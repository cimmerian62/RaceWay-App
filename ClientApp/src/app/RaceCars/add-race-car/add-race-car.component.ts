import { Component, OnInit } from '@angular/core';
import { RaceCar } from '../../_models/race-car';
import { RaceCarService } from '../../_services/race-car.service';

@Component({
  selector: 'app-add-race-car',
  templateUrl: './add-race-car.component.html',
  styleUrls: ['./add-race-car.component.css']
})
export class AddRaceCarComponent implements OnInit {
  targetRaceCar: RaceCar = {} as RaceCar;



  constructor(private raceCarService: RaceCarService) { }

  ngOnInit(): void {
  }


  onSubmit(value: any) {
    this.raceCarService.addRaceCarDb(value).subscribe(
      () => console.log('sucess')

    )
    
    

  }
  onCancel() {

  }
}
