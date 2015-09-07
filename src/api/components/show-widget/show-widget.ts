/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {
        Component,
        View,
        CORE_DIRECTIVES,
        ElementRef,
        DynamicComponentLoader,
        LifecycleEvent,
        Attribute
} from 'angular2/angular2';

import {WidgetContainer} from '../widget-container/widget-container';

declare var fetch;
declare var System;

class WidgetLoader {
    loadWidget(url){
        return fetch(url)
            .then(res => res.json())
    }
}
//class WidgetLoader {
//    loadComponentConfig(url){
//        return fetch(url)
//            .then(res => res.json())
//            .then(componentList =>
//                Promise.all(componentList.map(config =>
//                    this.loadComponent(config))))
//    }
//    loadComponent(configObject){
//        return System.import(configObject.path)
//            .then(componentModule =>
//                componentModule[configObject.component])
//    }
//}

@Component({
    // the HTML tag for this component
    selector: 'show-widget',

    // bind to the widget loader
    bindings: [WidgetLoader],

    // let the user tell us where to load the widget from
    properties: ['src: src'],

    // handle component events
    lifecycle: [LifecycleEvent.onInit]
})

@View({
    directives: [CORE_DIRECTIVES, WidgetContainer],
    template: `
        <div #content>
            Loading widget...
        </div>
    `
})


export class ShowWidget {
    src: string;
    widgetLoader: WidgetLoader;
    loader: DynamicComponentLoader;
    elementRef: ElementRef;

    constructor(widgetLoader: WidgetLoader, loader: DynamicComponentLoader, elementRef:ElementRef) {
        this.widgetLoader = widgetLoader;
        this.loader = loader;
        this.elementRef = elementRef;
    }

    // Lifecycle.onInit -- load the configured widget
    onInit(){
        this.widgetLoader.loadWidget(this.src)
            .then(widget =>
                this.loader.loadIntoLocation(widget.content, this.elementRef, 'content'));
    }
}

