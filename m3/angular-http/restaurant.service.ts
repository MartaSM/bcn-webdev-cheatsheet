import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise'; <--- This line is no more necessary as toPromise is no more an operator. It's a method on the Observable class which means we don't have to import it anymore.

// import { environment } from '../../environments/environment';

@Injectable()
export class RestasurantService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/restaurants`, options)
      .toPromise();
  }

  getOneById(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/restaurants/${id}`, options)
      .toPromise();
  }

  // how to gain access to the full response object (headers, status code, etc...)
  // and then still resolve with the resposne body (json)

  getFoobar(): Promise<any> {
    const options = {
      observe: 'response'
    };
    return this.httpClient.get(`${this.baseUrl}/restaurants`, options)
      .toPromise()
      .then((res: HttpResponse<Object>) => res.body);
  }
}
