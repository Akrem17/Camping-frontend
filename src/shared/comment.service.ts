import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }


  createComment(comment:string,tourId:string,user:string){
    
    return this.http.post(`${environment.url}/comment/add_comment`,{
        comment,
        tourId,
        user
  })
}
}
