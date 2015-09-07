/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {
        Component,
        View,
        CORE_DIRECTIVES
} from 'angular2/angular2';

@Component({
    selector: 'widget-container'
})

@View({
    directives: [CORE_DIRECTIVES],
    template: `
        <div class="widget-container">
            <content></content>
        </div>
      `
})

export class WidgetContainer {
}
