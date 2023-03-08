import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavComponent } from './nav/nav.component';
import { DriverListComponent } from './Drivers/driver-list/driver-list.component';
import { RaceCarListComponent } from './RaceCars/race-car-list/race-car-list.component';
import { AddDriverComponent } from './Drivers/add-driver/add-driver.component';
import { AddRaceCarComponent } from './RaceCars/add-race-car/add-race-car.component';
import { DriverCardComponent } from './Drivers/driver-card/driver-card.component';
import { RaceCarCardComponent } from './RaceCars/race-car-card/race-car-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NavComponent,
    DriverListComponent,
    RaceCarListComponent,
    AddDriverComponent,
    AddRaceCarComponent,
    DriverCardComponent,
    RaceCarCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: '',
        children: [
          { path: 'drivers', component: DriverListComponent },
          { path: 'add-driver', component: AddDriverComponent },
          { path: 'race-cars', component: RaceCarListComponent },
          { path: 'add-race-car', component: AddRaceCarComponent },
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
