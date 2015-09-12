# Angular 2 Widget API
This is a simple widget api.  It allows for a page to dynamically insert any number of widgets in it.  A widget is an
addressable component (via the src attribute) that renders any HTML.  This API will dynamically render the widget's
HTML in place.  For example:

Assuming the following app and widget components:

    /app:
        <div></div>
        
    /api/ads-widget:
        <div>Awesome Vacation Rental</div>
 
    /api/rss-feed-widget:
        <div>Best angular2 widget api released!</div>

    /api/stock-tick-widget:
        <div>DOW ^200</div>

Then given the following page:

    <app>
        <show-widget src="/api/ads-widget"/>
        
        <show-widget src="/api/rss-feed-widget"/>
        
        <show-widget src="/api/stock-tick-widget"/>
        ...
    </app>

The following HTML will get generated:

    <div>
        <div>Awesome Vacation Rental</div>

        <div>Best angular2 widget api released!</div>

        <div>DOW ^200</div>
    </div>
    
    
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