/// <reference path="../../typings/angular2/angular2.d.ts" />

/*
    The keystoneui api test app.
 */

// Angular 2
import {Component, View, CORE_DIRECTIVES, bootstrap} from 'angular2/angular2';

import {ShowWidget} from '../api/components/widget/show-widget';


@Component({
    selector: 'app-container'
})

@View({
    directives: [ CORE_DIRECTIVES, ShowWidget ],
    template: `
      <div>
        <show-widget [src]="'config.json'"></show-widget>
      </div>
    `
})

export class AppContainer {
    title: string;
    constructor() {
        this.title = 'Angular 2 Widget API Test App';
    }
}



bootstrap(AppContainer);

