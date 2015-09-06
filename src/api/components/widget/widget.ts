/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'widget'
})

@View({
    directives: [CORE_DIRECTIVES],
    template: `
        <div class="widget">
            Loading widget content...
        </div>
      `
})

/**
 * This component implements keystoneui widget view. The <content> tag defines a widget content drop area.
 */
export class Widget {
}
