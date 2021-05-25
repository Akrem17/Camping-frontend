import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tour } from 'src/models/tour.modal';

import { environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class TourService {

 
  constructor(private http:HttpClient) { }


  getTours(search?){
    
    if(search){
      return this.http.get(`${environment.url}/randonnee/get_randonnee?startLocation=${search}`)
    }else{
      return this.http.get(`${environment.url}/randonnee/get_randonnee`)
    }
     
  }

  getTour(id:string){
    return this.http.get(`${environment.url}/randonnee/get_randonnee/${id}`)
  }

  createTour(tour:Tour){
    return this.http.post(`${environment.url}/randonnee/add_randonnee`,tour)
  }

}
