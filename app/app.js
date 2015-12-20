System.register(['angular2/core', './riot-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, riot_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (riot_service_1_1) {
                riot_service_1 = riot_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(dataservice) {
                    this.dataservice = dataservice;
                    this.getSummoner = function () {
                        var _this = this;
                        dataservice.sumName(this.searchInput).subscribe(function (res) {
                            console.log(res.json());
                            _this.currentSummoner = res.json()[_this.searchInput];
                        }, console.error.bind(console));
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<input [(ngModel)]=\"searchInput\" type=\"email\">\n    <button (click)=\"getSummoner()\">Search</button>\n    <h1>welcome</h1>\n\t<div *ngIf=\"currentSummoner\">\n\t<img src=\"http://ddragon.leagueoflegends.com/cdn/5.24.2/img/profileicon/{{currentSummoner.profileIconId}}.png\" alt=\"\" />\n\t\t<p>Summoner Name: {{currentSummoner.name}}</p>\n\t\t<p>Summoner Level: {{currentSummoner.summonerLevel}}</p>\n\t</div>\n    ",
                        providers: [riot_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [riot_service_1.DataService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//http://ddragon.leagueoflegends.com/cdn/5.24.2/img/profileicon/588.png  
//# sourceMappingURL=app.js.map