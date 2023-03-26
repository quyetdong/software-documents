## Meteor Cloud vs Galaxy
- Meteor cloud including: Galaxy hosting, Meteor APM, Atmosphere

- Galaxy hosting: hosting service of Meteor
- Meteor APM: performance monitoring tool for Meteor apps on Galaxy
- Atmosphere: the community library of open source packages built and used by thousands of Meteor Developers

## Deploy meteor app to Galaxy
- Create account on cloud.meteor.com
- Go to Applications setting in your cloud meteor account
- Create/deploy new app on cloud meteor
- Link app with github repository and configure for the app
- After that, when you make a git push, the app will automatically deployed


## Meteor File structure
### General rule
- Recommend all of application code should be placed inside the imports/ directory. Meteor build system will only bundle and include that file if it is referenced from another file using import
- Meteor will load all files outside of any directory named imports/ in the application using the default file load order rules ("eager evaluation or loading")
- Recommend to create exactly two eagerly loaded files `client/main.js` and `server/main.js` in order to define explicit entry points for both the client and the server
- Any file in any directory named server/ will only be available on the server, and likewise for files in any directory named client/.
- These main.js files won't do anything themselves, but they should import some startup modules which will run immediately, on client and server respectively when the app loads.
These modules should do any configuration necessary for the packages you are using in your app, and import the rest of your app's code


### Special directories
- imports/: any directory named imports/ is not loaded anywhere and files must be imported using import
- node_modules/: any directory named node_modules/ is not loaded anywhere, node.js packages installed into node_modules directories must be imported using import or by using Npm.depends in package.js
- client/: any directory named client/ is not loaded on the server, similar to wrapping your code in if(Meteor.isClient) {}.

    All files loaded on the client are automatically concatenated and minified when in production mode. In development mode, JavaScript and CSS files are not minified, to make debugging easier. CSS files are still combined into a single file for consistency between production and development, because changing the CSS file’s URL affects how URLs in it are processed.

    HTML files in a Meteor application are treated quite a bit differently from a server-side framework. Meteor scans all the HTML files in your directory for three top-level elements: `<head>`, `<body>`, and `<template>`. The head and body sections are separately concatenated into a single head and body, which are transmitted to the client on initial page load.

- server/: Any directory named server/ is not loaded on the client. Similar to wrapping your code in if (Meteor.isServer) { ... }, except the client never even receives the code. Any sensitive code that you don’t want served to the client, such as code containing passwords or authentication mechanisms, should be kept in the server/ directory.

    Meteor gathers all your JavaScript files, excluding anything under the client, public, and private subdirectories, and loads them into a Node.js server instance. In Meteor, your server code runs in a single thread per request, not in the asynchronous callback style typical of Node.
- public/: All files inside a top-level directory called public/ are served as-is to the client. 
    When referencing these assets, do not include public/ in the URL, write the URL as if they were all in the top level. For example, reference public/bg.png as <img src='/bg.png' />. This is the best place for favicon.ico, robots.txt, and similar files.
- private/: All files inside a top-level directory called private/ are only accessible from server code and can be loaded via the Assets API. This can be used for private data files and any files that are in your project directory that you don’t want to be accessible from the outside.
- client/compatibility/: This folder is for compatibility with JavaScript libraries that rely on variables declared with var at the top level being exported as globals. Files in this directory are executed without being wrapped in a new variable scope. These files are executed before other client-side JavaScript files.
- tests/: Any directory named tests/ is not loaded anywhere. Use this for any test code you want to run using a test runner outside of Meteor’s built-in test tools.
- The following directories are also not loaded as part of your app code:

    Files/directories whose names start with a dot, like .meteor and .git
    packages/: Used for local packages
    cordova-build-override/: Used for advanced mobile build customizations
    programs: For legacy reasons
- Files outside special directories:
    All JavaScript files outside special directories are loaded on both the client and the server. Meteor provides the variables Meteor.isClient and Meteor.isServer so that your code can alter its behavior depending on whether it’s running on the client or the server.

    CSS and HTML files outside special directories are loaded on the client only and cannot be used from server code.
- 


## Packages only for prototyping (not secure for production)
- autopublish (to demo get all data from client side)
- insecure (to demo insert data from client side)


## To create methods on server side for client side using:
- Meteor's remote procedure call (RPC) system, used to save user input events and data that come from the client
- Meteor.methods();
- Once a method is created and import in server/main.js, it will be global in the entire app

## Publications and data loading
- Meteor is built from the ground up on the Distributed Data Protocol (DDP) to allow data transfer in both directions, you can create publication endpoints that can push data from server to client.
- In Meteor a publication is a named API on the server that constructs a set of data to send to a client. A client initiates a subscription which connects to a publication, and receives that data. That data consists of a first batch sent when the subscription is initialized and then incremental updates as the published data changes.
- A subscription can be thought of as a set of data that changes over time. Typically, the result of this is that a subscription “bridges” a server-side MongoDB collection, and the client side Minimongo cache of that collection. You can think of a subscription as a pipe that connects a subset of the “real” collection with the client’s version, and constantly keeps it up to date with the latest information on the server.

## DDP Specification (Distributed Data Protocol)
- A protocol between client and server that support two operations:
>> - Remote procedure calls by the client to the server (Methods)
>> - The client subscribing to a set of documents, and the server keeping the client informed about the contents of those documents as they change over time (publications and subscriptions) 

