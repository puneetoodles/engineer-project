import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {
    }

    getData(): Observable<any> {
        return this.http.get('http://hn.algolia.com/api/v1/search_by_date?tags=story')
    }
}