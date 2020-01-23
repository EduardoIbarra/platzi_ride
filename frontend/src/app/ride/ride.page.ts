import { Component, OnInit } from '@angular/core';
import {DEFAULT_RIDE_OBJECT, Ride} from '../../models/Ride';
import {RideService} from '../../services/ride';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.page.html',
  styleUrls: ['./ride.page.scss'],
})
export class RidePage implements OnInit {
  id: string;
  ride: Ride = DEFAULT_RIDE_OBJECT;
  constructor(
      private rideService: RideService,
      private navCtrl: NavController,
      private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.rideService.getById(this.id).subscribe((data: Ride) => {
      this.ride = data;
      console.log(data);
    }, (error) => {
      alert('No se pudo obtener el ride');
      console.log(error);
    })
  }

  delete() {
    this.rideService.delete(this.ride.id).subscribe((data) => {
      alert('Eliminado con éxito');
      this.navCtrl.pop();
    }, (error) => {
      alert('No se pudo eliminar la rodada');
      console.log(error);
    })
  }
}
