/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {Component, View, CORE_DIRECTIVES, ElementRef, DynamicComponentLoader} from 'angular2/angular2';

declare var fetch;
declare var System;

class WidgetLoader {
    loadComponentConfig(url){
        return fetch(url)
            .then(res => res.json())
            .then(componentList =>
                Promise.all(componentList.map(config =>
                    this.loadComponent(config))))
    }
    loadComponent(configObject){
        return System.import(configObject.path)
            .then(componentModule =>
                componentModule[configObject.component])
    }
}

@Component({
    // the HTML tag for this component
    selector: 'show-widget',

    // bind to the widget loader
    bindings: [WidgetLoader],

    // let the user tell us where to load the widget from
    properties: ['src: src'],

    // mount a DOMContentLoaded event handler onto the host element
    host: {
        '(DOMContentLoaded)': 'load()'
    }
})

@View({
    directives: [CORE_DIRECTIVES],
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

    load(){
        this.widgetLoader.loadComponentConfig(this.src)
            .then(components =>
                Promise.all(components.map(comp =>
                    this.loader.loadIntoLocation(comp, this.elementRef, 'content'))));
    }
}

