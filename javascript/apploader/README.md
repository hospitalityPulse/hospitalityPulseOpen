# apploader

Asyncronous lazy-loading frontend assets.

This script expects a single javascript, a single css, and a constants url.
It will automatically bootstrap angular when all assets have been loaded.
This requires the angular app name to be passed.

# Example

In your HTML, right before the </body> tag, add the following line:

<script id="apploader" src="..."></script>

The src path takes the following URL:
  /apploader.js?js=main.js&css=main.css&const=%2Fconst%2Fpath&app=MyAngularApp

id="apploader" is important and must remain.

# Constants

The constants url must return JSON. See below for an example.

The outputted JSON will be added to an angular constant module prior to bootstrap:

```
angular.module(app_name + ".constants").constant("Const", const_data);
```

)]}',
{"Component":{"BedroomCount":{"FreeManyThreshold":3,"RecoOverFreeRatioFewThreshold":0.9},"CloseOnFocusLost":false,"QueueEnabled":true,"RememberLastSearch":true}}

# CSS

Add all important css to the HTML document directly.

Once all assets have been loaded, the script will automatically add the following css class:

pre-loaded { display: none !important; }

This is helpful for loaders.

# Support

The JSON object is required. The constants url gets passed in to JSON.parse.

IE8+, and modern browsers are supported.
