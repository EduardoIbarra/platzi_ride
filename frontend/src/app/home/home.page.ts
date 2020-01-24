import { Component } from '@angular/core';
import {Credential, DEFAULT_CREDENTIAL_OBJECT} from '../../models/credential';
import {AuthenticationService} from '../../services/authentication';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  credential: Credential = DEFAULT_CREDENTIAL_OBJECT;
  constructor(
      private authenticationService: AuthenticationService,
      private navCtrl: NavController
  ) {}

  login() {
    // Hacer el login o el signup
    this.doLogin();
  }
  doLogin() {
    this.authenticationService.login({
      email: this.credential.email,
      password: this.credential.password
    }).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('jwt', data.token);
      this.navCtrl.navigateRoot('/rides');
    }, (error) => {
      alert('No pudimos autenticarte!');
      console.log(error);
    })
  }
}
