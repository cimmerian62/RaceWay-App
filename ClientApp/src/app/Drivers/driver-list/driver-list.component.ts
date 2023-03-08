import { Component, OnInit } from '@angular/core';
import { Driver } from '../../_models/driver';
import { DriverService } from '../../_services/driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  drivers: Driver[] = []

  constructor(public driverService: DriverService) { }

  ngOnInit(): void {
    this.driverService.getDriversDb().subscribe(
      arr => {
        this.drivers = arr;
      }
        
    )
  }

}
