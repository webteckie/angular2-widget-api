/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {
        Component,
        View,
        LifecycleEvent,
        CORE_DIRECTIVES
} from 'angular2/angular2';

import {ShowWidget} from '../show-widget/show-widget';

// forward declarations to avoid compiler warnings
declare var fetch;

@Component({
    // the HTML tag for this component
    selector: 'widget-container',

    // handle component events
    lifecycle: [LifecycleEvent.OnInit]
})

@View({
    directives: [CORE_DIRECTIVES],
    template: `
        <div class="widget-container">
        </div>
      `
})

export class WidgetContainer {
    parent: ShowWidget;

    constructor(parent:ShowWidget){
        this.parent = parent;
    }

    // load the widget's html content and activate it in the template
    onInit(){
        fetch(this.parent.src).then(res => res.json())
        .then(widget => {
            (<HTMLElement>document.querySelector('.widget-container')).innerHTML = widget.content;
        });
    }
}
