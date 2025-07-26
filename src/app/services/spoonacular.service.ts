import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private firebaseUrl = 'https://nuitry-freeze-default-rtdb.firebaseio.com/inspiringRecipes.json';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get(this.firebaseUrl);
  }
}
