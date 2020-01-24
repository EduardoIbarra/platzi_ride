import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {RideService} from '../../services/ride';
import {DEFAULT_RIDE_OBJECT, Ride} from '../../models/Ride';

@Component({
  selector: 'app-ride-form',
  templateUrl: './ride-form.page.html',
  styleUrls: ['./ride-form.page.scss'],
})
export class RideFormPage implements OnInit {
  id: string;
  editing = false;
  ride: Ride = DEFAULT_RIDE_OBJECT;
  wayPoints = [];
  masterWayPoint: string;
  constructor(
      private activatedRoute: ActivatedRoute,
      private navCtrl: NavController,
      private rideService: RideService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.editing = (this.id !== 'new');
    if (this.editing) {
        this.rideService.getById(this.id).subscribe((data: Ride) => {
            this.ride = data;
            console.log(data);
        }, (error) => {
            alert('No se pudo obtener el ride');
            console.log(error);
        })
    }
  }

  addWayPoint() {
      this.wayPoints.push(this.masterWayPoint);
      this.masterWayPoint = '';
      this.ride.wayPoints = this.wayPoints;
      console.log(this.ride);
  }

  save() {
    if (this.editing) {
        this.rideService.update(this.ride).subscribe((data) => {
            alert('Se actualizó tu rodada');
            this.navCtrl.pop();
            console.log(data);
        }, (error) => {
            alert('No se pudo actualizar la rodada...');
            console.log(error);
        })
    } else {
      this.rideService.create(this.ride).subscribe((data) => {
          alert('Se creó tu rodada');
          this.navCtrl.pop();
          console.log(data);
      }, (error) => {
          alert('No se pudo crear la rodada...');
          console.log(error);
      })
    }
  }

}
