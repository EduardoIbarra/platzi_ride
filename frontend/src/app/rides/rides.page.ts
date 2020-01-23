import { Component, OnInit } from '@angular/core';
import {RideService} from '../../services/ride';
import {Ride} from '../../models/Ride';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.page.html',
  styleUrls: ['./rides.page.scss'],
})
export class RidesPage implements OnInit {
  rides: Observable<Ride[]>;
  constructor(
      public rideService: RideService
  ) { }

  ngOnInit() {
    this.rides = this.rideService.getAll();
  }

}
