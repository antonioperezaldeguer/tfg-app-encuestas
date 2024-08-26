import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private apiUrl = 'https://api.example.com';  // Reemplaza esto con la URL de tu backend

  constructor(private http: HttpClient) {}

  // Método para obtener datos
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`);
  }

  // Método para enviar datos (POST)
  sendData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/data`, data);
  }

  // Método para actualizar datos (PUT)
  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/data/${id}`, data);
  }

  // Método para eliminar datos (DELETE)
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/data/${id}`);
  }
}