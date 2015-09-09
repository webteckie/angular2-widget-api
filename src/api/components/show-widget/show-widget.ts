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

// forward declarations to avoid compiler warnings
declare var System;

class WidgetLoader {
    loadComponent(configObject){
        console.log('****configObject: '+JSON.stringify(configObject));
        return System.import(configObject.path).then(componentModule => componentModule[configObject.component] );
    }
}

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
    content: HTMLElement;
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
        var widgetContainer = {
            "component": "WidgetContainer",
            "path": "/api/components/widget-container/widget-container"
        };

        System.import(widgetContainer.path).then(componentModule => componentModule[widgetContainer.component] )
        .then(component => {
           this.loader.loadIntoLocation(component, this.elementRef, 'content')
        });
    }
}

