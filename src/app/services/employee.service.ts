import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Employee } from '../models/employee';


const API_URL = 'https://retoolapi.dev/HYd96h/data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}


  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL)
      .pipe(
          catchError((error: any) => {
          console.error('Error fetching employees:', error);
          return [];
        })
      );}
}
