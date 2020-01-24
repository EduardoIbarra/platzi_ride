import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RideService} from '../services/ride';
import {AuthenticationService} from '../services/authentication';
import {TokenInterceptorService} from '../services/tokenInterceptor';
import {WeatherService} from '../services/weather';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        RideService,
        AuthenticationService,
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
        WeatherService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
