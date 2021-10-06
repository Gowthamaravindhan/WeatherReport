import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ApixuService } from "../apixu.service";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public temperature='';
  public pressure ='';
  public wind ='';
  public weatherDesc='';
  public lon=" ";
  public lat="";
  weatherSearchForm!:FormGroup;
  public weatherData: any;
  locationsList: any[]=[];
  locationData:any[]=[];
  weatherSearchFormData: any[]=[];
    constructor(public formBuilder: FormBuilder, private apixuService: ApixuService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: new FormControl()
    });
  }
  sendToAPIXU() {
    
    // console.log( this.weatherSearchForm.value);
    this.apixuService
    .searchWeatherData(this.weatherSearchForm.value.location)
    .subscribe(data => {
      this.weatherData = data;
      this.temperature = (this.weatherData?.main.temp - 273).toFixed(1);
      this.weatherDesc = this.weatherData?.weather[0].description;
      this.wind = this.weatherData?.wind.speed + 'ms  ' + this.weatherData?.wind.deg +' deg';
      this.lon = this.weatherData?.coord.lon;
      this.lat = this.weatherData?.coord.lat;
      this.pressure = this.weatherData?.main.pressure;
      this.locationData.push(this.weatherData)
  
      console.log(this.weatherData);
      
    });
    
  }
}
