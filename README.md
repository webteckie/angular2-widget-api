# Angular 2 Widget API
This is a simple widget api.  It allows for a page to dynamically insert any number of widgets in it.  For example:
 
    <app>
        <show-widget src="/widget-1"/>
        ...
        <show-widget src="/widget-2"/>
        ...
        <show-widget src="/widget-3"/>
        ...
    </app>
    
    
## Installation

    Clone the project
    
    Install Dependencies
        Run "npm install" within project directory

    Build the project

        Run "gulp"

    Run the project
        Open browser @ http://localhost:7777/



## Project Overview

The project has both the api as well as a test web server/app:
  
    api -- under /src/api 
    test server -- under /src/server
    test app -- under /src/webapp
    
The test bootstrapping page is /src/webapp/index.html, which imports the app-container to start things off in testing
the show-widget api component.

NOTE:  this project is in-progress development!!!  Until a stable version is released, this component as-is may not
        function correctly.  Also it has a dependency on angular 2, which is in beta and is constantly changing and 
        that may also cause this project to not function correctly, if a different version is used.