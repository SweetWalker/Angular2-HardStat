import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class DataService {
  items:Array<any>;

  constructor(private http:Http) {
  }

  public sumName(data) {
  	console.log(data);
  	return this.http.get(`https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/${data}?api_key=273f01a7-8436-492c-870a-89683f87039e`)
  }
}

