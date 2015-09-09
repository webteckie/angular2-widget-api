/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {
        Component,
        View,
        LifecycleEvent,
        ElementRef,
        CORE_DIRECTIVES
} from 'angular2/angular2';

import {ShowWidget} from '../show-widget/show-widget';

// forward declarations to avoid compiler warnings
declare var fetch;

@Component({
    // the HTML tag for this component
    selector: 'widget-container',

    // handle component events
    lifecycle: [LifecycleEvent.onInit]
})

@View({
    directives: [CORE_DIRECTIVES],
    template: `
        <div id="wc-1" class="widget-container">
            <content select="[content]"></content>
        </div>
      `
})

export class WidgetContainer {
    content: string;
    elementRef: ElementRef;
    parent: ShowWidget;

    constructor(elementRef:ElementRef, parent: ShowWidget){
        this.elementRef = elementRef;

        this.parent = parent;
    }

    // load the widget's html content and activate it in the template
    onInit(){
        fetch(this.parent.src).then(res => res.json())
        .then(widget => {
            this.content = widget.content;
            console.log('yeah, fetched the html content: '+this.content);
        });
        // TODO:  how to activate this content in the template?
    }
}
