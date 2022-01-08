import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable( {
    providedIn: 'root'
} )
export class JobService  {
  private url = `${environment.apiUrl}/jobs`;

  constructor(private http: HttpClient) {
  }

  search(params: any): Promise<any>{
    return firstValueFrom(this.http.get(this.url, { params }));
  }
}
