import { Injectable } from '@angular/core';
import { IPost } from '../domain/ipost';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
   // url: string = 'https://jsonplaceholder.typicode.com/posts';
   url: string = 'http://localhost:8383/api/posts';
  constructor(private _http: HttpClient) { }

  getAllPosts(): Observable<IPost[]> {
    return this._http.get<IPost[]>(this.url);
  }
}
