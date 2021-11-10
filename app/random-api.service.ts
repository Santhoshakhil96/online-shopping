import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRandomUsers } from './common/interface/userdata';

@Injectable({
  providedIn: 'root'
})
export class RandomApiService {


  constructor(private http: HttpClient) { }

  
  getRandomUsers(): Promise<IRandomUsers> {
    return new Promise((resolve, reject) => {
        this.http.get<IRandomUsers>(environment.baseUrl + '/api/users')
            .subscribe((response: any) => {
                resolve(response);
            },
                (reject: any) => { resolve(reject)});
    });
}
   
}
