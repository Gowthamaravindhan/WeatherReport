import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { StringDecoder } from 'string_decoder';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  public appKey = 'eb03b1f5e5afb5f4a4edb40c1ef2f534';
  public apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  
  constructor(private http: HttpClient){}

  searchWeatherData(location:string) {
    let queryParam = location + '&appid=' + this.appKey;
    return this.http.get(this.apiUrl + queryParam).pipe(
      );
  }
}
