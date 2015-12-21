import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
	selector: 'not-found',
	template: `
		<div>
			<h1>USER NOT FOUND</h1>
			<button (click)="goBack()">Back</button>
		</div>
	`
})
export class NotFoundComponent {
	constructor(private _router: Router) {}
	
	public goBack() {
		this._router.navigate(['Home']);
	}
}