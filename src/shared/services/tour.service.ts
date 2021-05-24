import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Tour } from 'src/models/tour.modal';
import { environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http:HttpClient) { }

  getTours(){

    return this.http.get(`${environment.url}/randonnee/get_randonnee`)
  }

  getTour(id:string){
    return this.http.get(`${environment.url}/randonnee/get_randonnee/${id}`)
  }

}
