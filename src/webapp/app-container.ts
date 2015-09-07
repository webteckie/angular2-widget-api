/// <reference path="../../typings/angular2/angular2.d.ts" />

/*
    The keystoneui api test app.
 */

// Angular 2
import {Component, View, CORE_DIRECTIVES, bootstrap} from 'angular2/angular2';

//import {RouteConfig} from 'angular2/router';

import {ShowWidget} from '../api/components/show-widget/show-widget';


@Component({
    selector: 'app-container'
})

@View({
    directives: [ CORE_DIRECTIVES, ShowWidget ],
    template: `
      <div>
        <show-widget [src]="'/api/widget/1'"></show-widget>
      </div>
    `
})

//@RouteConfig([
//    { path: '/widget/1',  as: 'widget',      component: WidgetContainer }
//])

export class AppContainer {
    title: string;
    constructor() {
        this.title = 'Angular 2 Widget API Test App';
    }
}



bootstrap(AppContainer);

