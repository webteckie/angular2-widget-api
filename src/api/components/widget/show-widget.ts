/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import {Component, View, CORE_DIRECTIVES, ElementRef, DynamicComponentLoader} from 'angular2/angular2';

declare var fetch;
declare var System;

class MyComponentLoader {
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
    selector: 'show-widget',
    bindings: [MyComponentLoader],
    properties: ['src: src'],
})

@View({
    directives: [CORE_DIRECTIVES],
    template: `
        <div #content>
            Loading widget...
        </div>
    `
})


/**
 * This component implements a dynamic templateUrl view.  The value of the view will come from the src property configured
 * in the directive.  When angular processes the templateUrl it will automatically get the HTML template with that URL.
 */
export class ShowWidget {
    src: string;

    constructor(myLoader: MyComponentLoader, loader: DynamicComponentLoader, elementRef:ElementRef) {
        myLoader.loadComponentConfig('./config.json')
            .then(components =>
                Promise.all(components.map(comp =>
                    loader.loadIntoLocation(comp,elementRef, 'content'))));
    }
    doClick(){
        console.log('clicked')
    }}

