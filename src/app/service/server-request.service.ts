import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {
  private apiUrl = 'http://localhost:7200';
  private headers = new HttpHeaders();
  private openModalSubject = new BehaviorSubject<boolean>(false);
  openModal$: Observable<boolean> = this.openModalSubject.asObservable();

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    console.log(userData, 'server')
    return this.http.post<any>(`${this.apiUrl}/register`, userData, {
      headers: this.headers
    });
  }

  updateUser(userId: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${userId}`, updatedData);
  }

  toggleOpenModal(): void {
    const currentState = this.openModalSubject.getValue();
    this.openModalSubject.next(!currentState);
  }
}
