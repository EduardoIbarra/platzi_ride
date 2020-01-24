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
  isLoggingIn = true;
  credential: Credential = DEFAULT_CREDENTIAL_OBJECT;
  constructor(
      private authenticationService: AuthenticationService,
      private navCtrl: NavController
  ) {}

  public toggleLogin = () => {
    this.isLoggingIn = !this.isLoggingIn;
  };

  login() {
    if (this.isLoggingIn) {
      this.doLogin();
    } else {
      if (this.credential.password !== this.credential.passwordConfirm) {
        alert('Tus contraseñas no coincidieron');
        return;
      }
      this.authenticationService.signup({
        email: this.credential.email,
        password: this.credential.password
      }).subscribe((data: any) => {
        console.log(data);
        this.doLogin();
      }, (error) => {
        alert('No pudimos autenticarte!');
        console.log(error);
      })
    }
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
