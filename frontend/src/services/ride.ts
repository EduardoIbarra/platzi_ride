import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ride} from '../models/Ride';


@Injectable()
export class RideService {
    private url = 'http://localhost:1337/ride';
    constructor (
        private http: HttpClient
    ) {

    }
    public getAll(): Observable<[Ride]> {
        return this.http.get(this.url) as Observable<[Ride]>;
    }
    public create(ride: Ride) {
        return this.http.post(this.url, ride);
    }
    public update(ride: Ride) {
        return this.http.put(`${this.url}/${ride.id}`, ride);
    }
    public getById(id): Observable<Ride> {
        return this.http.get(`${this.url}/${id}`) as Observable<Ride>;
    }
    public delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
