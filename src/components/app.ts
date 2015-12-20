import {Component} from 'angular2/core';
import {DataService} from '../services/riot-service';
import {SummoreModel} from '../models/summoner';

@Component({
    selector: 'my-app',
    template: `<input [(ngModel)]="searchInput" type="email">
    <button (click)="getSummoner()">Search</button>
    <h1>welcome</h1>
	<div *ngIf="currentSummoner">
	<img src="http://ddragon.leagueoflegends.com/cdn/5.24.2/img/profileicon/{{currentSummoner.profileIconId}}.png" alt="" />
		<p>Summoner Name: {{currentSummoner.name}}</p>
		<p>Summoner Level: {{currentSummoner.summonerLevel}}</p>
	</div>
    `,
    providers: [DataService]
})

export class AppComponent { 
	constructor(private dataservice:DataService){
		this.getSummoner = function() {
			dataservice.sumName(this.searchInput).subscribe(res => {
				console.log(res.json());
				this.currentSummoner = res.json()[this.searchInput];
			}, console.error.bind(console));
		}
	}

	private currentSummoner: SummoreModel;

	private searchInput: string;

	public getSummoner;
}
//http://ddragon.leagueoflegends.com/cdn/5.24.2/img/profileicon/588.png 