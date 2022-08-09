import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Bottom } from '../shared/bottom';

const URL = 'http://localhost:8090/api/v1';
const header = {
  accept: 'application/json'
}

@Injectable({
  providedIn: 'root'
})
export class BottomService {

  constructor(private http: HttpClient) { }

  getAllBottoms(sort: String): Observable<Bottom[]> {
    return this.http.get<Bottom[]>(`${URL}/bottom/?sort=${sort}`, { headers: header });
  }

  getBottom(bid: number): Observable<Bottom> {
    return this.http.get<Bottom>(`${URL}/bottom/${bid}`, {headers: header});
  }

  createBottom(bottom: Bottom): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${URL}/bottom/`, bottom, {headers: header});
  }

  deleteBottom(bid: number): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<any>>(`${URL}/bottom/${bid}`, {headers: header});
  }

  updateBottom(bottom: Bottom): Observable<HttpResponse<any>> {
    return this.http.put<HttpResponse<any>>(`${URL}/bottom/`, bottom, {headers: header});
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
