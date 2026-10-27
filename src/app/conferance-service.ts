import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Conferance } from './models/conferance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConferanceService {
  http = inject(HttpClient);
apiUrl = 'http://localhost:3000/conferances';

  getallConferances(): Observable<Conferance[]> {
    return this.http.get<Conferance[]>(this.apiUrl);
  }
  getConferanceById(id: number): Observable<Conferance> {
    // return this.http.get<any>(`http://localhost:3000/conferances/${id}`);
    return this.http.get<Conferance>(this.apiUrl + '/' + id);
  }
  deleteConferance(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id);
  }
  addConferance(conferance: Conferance): Observable<Conferance> {
    return this.http.post<Conferance>(this.apiUrl, conferance);
  }
  updateConferance(id: number, conferance: Conferance): Observable<Conferance> {
    return this.http.put<Conferance>(this.apiUrl + '/' + id, conferance);
  }

}
