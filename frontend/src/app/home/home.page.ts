import { Component } from '@angular/core';
import {Credential, DEFAULT_CREDENTIAL_OBJECT} from '../../models/credential';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  credential: Credential = DEFAULT_CREDENTIAL_OBJECT;
  constructor() {}

  login() {
    // Hacer el login o el signup
  }
}
