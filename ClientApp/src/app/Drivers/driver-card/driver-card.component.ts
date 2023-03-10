import { Component, Input, OnInit } from '@angular/core';
import { Driver } from '../../_models/driver';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.css']
})
export class DriverCardComponent implements OnInit {

  @Input() driver: Driver | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
