import {Component} from 'angular2/core';
import { Router } from 'angular2/router';
import { NotFoundComponent } from './not-found';
import {DataService} from '../services/riot-service';
import {SummonerModel} from '../models/summoner';

@Component({
    selector: 'my-app',
    template: `<input [(ngModel)]="searchInput" type="email">
    <button (click)="getSummoner()">Search</button>
    <h1>welcome</h1>
		<button (click)="goTo404()">LALAy</button>
	<div *ngIf="currentSummoner">
	<img src="http://ddragon.leagueoflegends.com/cdn/5.24.2/img/profileicon/{{currentSummoner.profileIconId}}.png" alt="" />
		<p>Summoner Name: {{currentSummoner.name}}</p>
		<p>Summoner Level: {{currentSummoner.summonerLevel}}</p>
	</div>
    `,
    providers: [DataService]
})
export class AppComponent { 
	constructor(private dataservice:DataService, private _router: Router){
		this.getSummoner = function() {
			dataservice.sumName(this.searchInput).subscribe(res => {
				console.log(res.json());
				this.currentSummoner = res.json()[this.searchInput];
			}, console.error.bind(console));
		}
	}

	private currentSummoner: SummonerModel;

	private searchInput: string;
	
	private goTo404() {
		this._router.navigate(['NotFound']);
	}

	public getSummoner;
}
//http://ddragon.leagueoflegends.com/cdn/5.24.2/img/profileicon/588.png 