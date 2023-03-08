import { Component, OnInit } from '@angular/core';
import { Driver } from '../../_models/driver';
import { DriverService } from '../../_services/driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  targetDriver: Driver = {} as Driver;

 

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
  }


  onSubmit(value: any) {
    this.driverService.addDriver(value).subscribe(
      () => console.log('sucess')

    )

  }
  onCancel() {

  }
}
