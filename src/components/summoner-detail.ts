import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

@Component({
	selector: 'summoner-detail',
	template: '<h1>Summoner detail</h1>'
})
export class SummonerDetailComponent {
	constructor(private _router: Router, private _routeParams) {}
}