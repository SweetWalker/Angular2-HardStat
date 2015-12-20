import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { AppComponent } from './app';
import { NotFoundComponent } from './not-found';
import { SummonerDetailComponent } from './summoner-detail';

@Component({
	selector: 'app-wrapper',
	template: `
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', name: 'Home', component: AppComponent},
	{ path: '/summoner/:server/:id', name: 'SummonerDetails', component: SummonerDetailComponent },
	{ path: '/errors/404', name: 'NotFound', component: NotFoundComponent }
])
export class RouterComponent {}