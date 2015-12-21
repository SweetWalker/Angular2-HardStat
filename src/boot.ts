import {bootstrap} from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouterComponent} from './components/router';


bootstrap(RouterComponent,[HTTP_PROVIDERS, ROUTER_PROVIDERS]);